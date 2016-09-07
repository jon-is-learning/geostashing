const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/server.js');

chai.use(chaiHttp);
const curTestUser = {
  model: null
};

// Let's create a new user so we can use its foreign key in below tests
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

  describe('locations api endpoint (/api/locations)', () => {
    it('should return json from GET /api/locations', (done) => {
      chai.request(server)
        .get('/api/locations').then((res) => {
          res.should.have.status(200);
          res.should.be.json;
          done();
        }).catch(done);
    });

    it('should return an array from GET /api/locations', (done) => {
      chai.request(server)
        .get('/api/locations').then((res) => {
          // console.log(res.body);
          res.should.have.status(200);
          res.body.should.be.an('array');
          done();
        }).catch(done);
    });

    it('should accept post requests with valid data', (done) => {
      // Since foreign keys are required and automatically generated:
      // We need to create a user for the test and use resulting id.
      chai
        .request(server)
        .post('/api/users')
        .field('name', 'testUserServerSpec')
        .then((res) => {
          console.log('This Test Suite User res.body: ', res.body);
          curTestUser.model = res.body;
          console.log('curTestUser value: ', curTestUser);
          chai
            .request(server)
            .post('/api/locations')
            .send({
              name: 'test',
              lat: '123.456789',
              lng: '123.456789',
              userId: curTestUser.model.id
            })
            .then((res) => {
              res.should.have.status(200);
              //based on the spec
              res.body.should.be.empty;
              done();
            })
        }).catch(done);
    });

    it('should reject post requests with invalid data', (done) => {
      chai.request(server).post('/api/locations')
        .then(done)
        .catch((res) => {
          res.should.have.status(400);

          return chai.request(server).post('/api/locations')
            .send({ thisis: 'not valid', test: ['data'] });
        }).catch((res) => {
          res.should.have.status(400);

          return chai.request(server).post('/api/locations').send({});
        }).catch((res) => {
          res.should.have.status(400);

          return chai.request(server).post('/api/locations')
            .send('also not valid');
        }).catch((res) => {
          res.should.have.status(400);
          done();
        });
    });

    it('should persist and return posted locations', (done) => {
      const reqData = {
        name: 'firstTest',
        lat: '123.456789',
        lng: '987.654321',
        userId: curTestUser.model.id
      };

      chai.request(server).post('/api/locations')
      .send(reqData)
      .then((res) => {
        res.should.have.status(200);

        return chai.request(server).get('/api/locations');
      }).then((res) => {
        res.should.be.json;
        res.body.should.be.an('array');
        res.body.length.should.not.equal(0);
        res.body[res.body.length - 1].name.should.eql('first test');
        done();
      }).catch(done);
    });

    it('should delete test location data', (done) => {
      chai
        .request(server)
        .delete('/api/locations/firstTest')
        .then((res) => {
          res.should.have.status(200);
        })
        .then((res) => {
          console.log('Delete location data response data: ', res);
          done();
        })
        .catch(done);
    });

    it('should delete test user data', (done) => {
      chai
        .request(server)
        .delete('/api/users/testUserServerSpec')
        .then((res) => {
          res.should.have.status(200);
        })
        .then((res) => {
          console.log('Delete user data response data: ', res);
          done();
        })
        .catch(done);
    });

  });
});
