const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/server');

const User = require('../server/models/userModel');
const Location = require('../server/models/locationModel');

chai.use(chaiHttp);

describe('product api endpoint (/api/products)', () => {
  describe('get all products', () => {
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

  describe('create product', () => {
    let sellerId = '';
    let locationId = '';

    beforeEach((done) => {
      Promise.resolve().then(() =>
        User.destroy({ where: {} }))
      .then(() =>
        Location.destroy({ where: {} }))
      .then(() =>
        User.create({ name: 'product_test_user' }))
      .then((user) => {
        sellerId = user.id;
      }).then(() =>
        Location.create({
          name: 'product_test_location',
          lat: 123.456,
          lng: 123.456,
          userId: sellerId
        })
      ).then((location) => {
        locationId = location.id;
        done();
      }).catch(done);
    });

    it('should POST to /api/products', (done) => {
      const newProduct = {
        name: 'a',
        description: 'b',
        price: '12.34',
        locationId,
        sellerId
      };

      chai.request(server)
        .post('/api/products')
        .send(newProduct)
        .then((res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.contain(newProduct);
          done();
        }).catch(done);
    });
  });
});
