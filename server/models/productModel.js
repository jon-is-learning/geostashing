const Sequelize = require('sequelize');
const db = require('./db');

const Location = require('./locationModel');
const User = require('./userModel.js');

const Product = db.define('product', {
  id: {
    type: Sequelize.UUID,
    unique: true,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false
  }
});

Product.belongsTo(Location);
Product.belongsTo(User, { as: 'seller' });

module.exports = Product;
