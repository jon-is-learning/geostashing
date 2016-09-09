const Sequelize = require('sequelize');

// Geostash temporarily removed
const sequelize = new Sequelize('geostash', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

module.exports = sequelize;
