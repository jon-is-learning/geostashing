const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/server.js');

chai.use(chaiHttp);

describe('server', () => {
  describe('static files', () => {
    it('should GET /', (done) => {
      chai.request(server).get('/').then((res) => {
        res.should.have.status(200);
        done();
      }).catch(done);
    });

    it('should GET / with valid html', (done) => {
      chai.request(server).get('/').then((res) => {
        res.should.have.status(200);
        res.should.be.html;
        done();
      }).catch(done);
    });

    it('should return 404 for /notafile', (done) => {
      chai.request(server).get('/notafile').then(done)
      .catch((res) => {
        res.should.have.status(404);
        done();
      });
    });
  });

  describe('geolocations api endpoint (/api/geolocations)', () => {
    it('should return json from GET /api/geolocations', (done) => {
      chai.request(server)
        .get('/api/geolocations').then((res) => {
          res.should.have.status(200);
          res.should.be.json;
          done();
        }).catch(done);
    });

    it('should return an array from GET /api/geolocations', (done) => {
      chai.request(server)
        .get('/api/geolocations').then((res) => {
          res.should.have.status(200);
          res.body.should.be.an('array');
          done();
        }).catch(done);
    });

    it('should accept post requests with valid data', (done) => {
      chai.request(server)
        .post('/api/geolocations')
        .send({ name: 'test', lat: 123.456789, lng: 123.456789 })
        .then((res) => {
          res.should.have.status(200);
          res.body.name.should.equal('test');
          res.body.lat.should.equal('123.456789');
          res.body.lng.should.equal('123.456789');
          done();
        }).catch(done);
    });

    it('should reject post requests with invalid data', (done) => {
      chai.request(server).post('/api/geolocations')
        .then(done)
        .catch((res) => {
          res.should.have.status(400);

          return chai.request(server).post('/api/geolocations')
            .send({ thisis: 'not valid', test: ['data'] });
        }).catch((res) => {
          res.should.have.status(400);

          return chai.request(server).post('/api/geolocations').send({});
        }).catch((res) => {
          res.should.have.status(400);

          return chai.request(server).post('/api/geolocations')
            .send('also not valid');
        }).catch((res) => {
          res.should.have.status(400);
          done();
        });
    });

    it('should persist and return posted geolocations', (done) => {
      const reqData = { name: 'first test', lat: 123.456789, lng: 987.654321 };

      chai.request(server).post('/api/geolocations')
      .send(reqData)
      .then((res) => {
        res.should.have.status(200);

        return chai.request(server).get('/api/geolocations');
      }).then((res) => {
        const mostRecent = res.body[res.body.length - 1];

        res.should.be.json;
        res.body.should.be.an('array');
        res.body.length.should.not.equal(0);
        //PostgreSQL returns decimal values as strings.
        //This keeps accuracy intact from rounding problems.
        //Not sure if this would be a problem for our uses.
        //We should check on string before we make a call.
        //We can either turn decimals into integers for storage.
        //Or call parseInt() on result of query.
        mostRecent.name.should.equal('first test');
        done();
      }).catch(done);
    });
  });
});
