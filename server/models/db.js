const Sequelize = require('sequelize');

const sequelize = new Sequelize(DATABASE_URL, 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

module.exports = sequelize;
