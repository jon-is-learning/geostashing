const Sequelize = require('sequelize');

const sequelize = new Sequelize('geostash', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = { Sequelize, sequelize };
