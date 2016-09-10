const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('user', {
  id: {
    type: Sequelize.UUID,
    unique: true,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: { type: Sequelize.STRING }
});

module.exports = User;
