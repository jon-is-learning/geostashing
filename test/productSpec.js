const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/server.js');

chai.use(chaiHttp);

describe('product api endpoint (/api/products)', () => {
  it('should return json from GET /api/products', (done) => {
    chai.request(server)
      .get('/api/products').then((res) => {
        res.should.have.status(200);
        res.should.be.json;
        done();
      }).catch(done);
  });

  it('should return an array from GET /api/products', (done) => {
    chai.request(server)
      .get('/api/products').then((res) => {
        res.should.have.status(200);
        res.body.should.be.an('array');
        done();
      }).catch(done);
  });
});
