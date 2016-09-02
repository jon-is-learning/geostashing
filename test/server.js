var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/server.js');

chai.use(chaiHttp);

describe('server', () => {
  describe('static files', () => {
    it('should GET /', (done) => {
      chai.request(server).get('/').end((err, res) => {
        res.should.have.status(200);
        done();
      });
    });
    it('should GET / with valid html', (done) => {
      chai.request(server).get('/').end((err, res) => {
        res.should.have.status(200);
        res.should.be.html
        done();
      });
    });
    it('should return 404 for /notafile', (done) => {
      chai.request(server).get('/notafile').end((err, res) => {
        res.should.have.status(404);
        done();
      });
    });
  });
});
