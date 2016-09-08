const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/server.js');
const expect = chai.expect;

chai.use(chaiHttp);

describe('user api endpoint (/api/users)', () => {
  describe('login', () => {
    it('should GET /api/user/:name', (done) => {
      chai.request(server)
        .get('/api/users/testOne')
        .then((res) => {
          res.should.have.status(200);
          done();
        }).catch(done);
    });

    //this test relies on the database already containing an entry for `testOne`
    xit('should respond with an object', (done) => {
      chai.request(server)
        .get('/api/users/testOne')
        .then((res) => {
          res.should.be.json;
          res.should.be.an('object');
          done();
        }).catch(done);
    });
  });

  describe('signup', () => {
    it('should POST to /api/users and return new user',
      (done) => {
        chai
          .request(server)
          .post('/api/users')
          .set('Content-Type', 'application/json')
          .send(JSON.stringify({ name: 'testUser' }))
          .then((res) => {
            res.should.have.status(200);
            res.body.should.be.an('object');
            done();
          })
          .catch(done);
      });
    it('should persist user data',
      (done) => {
        chai
          .request(server)
          .get('/api/users/testUser')
          .then((res) => {
            res.body.should.be.an('object');
            expect(res.body.name).to.equal('testUser');
            done();
          })
          .catch(done);
      });

  });

  describe('delete user', () => {
    it('should DELETE a user with name queried', (done) => {
      chai.request(server)
        .delete('/api/users/testUser')
        .then((res) => {
          res.should.have.status(200);
          res.body.should.eql([]);
          done();
        }).catch(done);
    });
  });
});
