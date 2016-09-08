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
        name: 'test',
        description: 'a test product',
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

    it('should reject empty POSTs', (done) => {
      const newProduct = {};

      chai.request(server)
        .post('/api/products')
        .send(newProduct)
        .then(done)
        .catch((res) => {
          res.should.have.status(400);
          done();
        });
    });

    it('should reject POSTs with invalid data', (done) => {
      const newProduct = {
        this: 'is not',
        real: 'data'
      };

      chai.request(server)
        .post('/api/products')
        .send(newProduct)
        .then(done)
        .catch((res) => {
          res.should.have.status(400);
          done();
        });
    });

    it('should reject POSTs with invalid id', (done) => {
      const newProduct = {
        name: 'test',
        description: 'a test product',
        price: '12.34',
        locationId: 'not a real id',
        sellerId
      };

      chai.request(server)
        .post('/api/products')
        .send(newProduct)
        .then(done)
        .catch((res) => {
          res.should.have.status(400);
          done();
        });
    });

    it('should reject POSTs missing id', (done) => {
      const newProduct = {
        name: 'test',
        description: 'a test product',
        price: '12.34',
        locationId
      };

      chai.request(server)
        .post('/api/products')
        .send(newProduct)
        .then(done)
        .catch((res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  describe('get one product (/api/products/:id)', () => {
    xit('should GET product', (done) => {
      chai.request(server)
        .get('/api/products/test')
        .then((res) => {
          res.should.have.status(200);
          res.should.be.json;
          done();
        }).catch(done);
    });
    xit('should not get GET with invalid id');
    xit('should not get GET with nonexistant id');
  });
});
