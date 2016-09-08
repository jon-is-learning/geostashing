const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/server.js');

chai.use(chaiHttp);

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
});
