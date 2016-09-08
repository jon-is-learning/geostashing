const Product = require('../models/productModel');
const User = require('../models/userModel');
const Location = require('../models/locationModel');
const Image = require('../models/imageModel');

const productController = {
  getAll(req, res) {
    Product.findAll({
      include: [
        Location,
        Image,
        { model: User, as: 'seller' }
      ]
    }).then((products) => res.json(products));
  },

  addOne(req, res) {
    Product.create(req.body)
      .then((product) => res.json(product))
      .catch((err) => res.status(400).send(err));
  }
};

module.exports = productController;
