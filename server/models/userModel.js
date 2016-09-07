const db = require('./db');
const Location = require('./locationModel');

const User = db.sequelize.define('user',
  {
    id: {
      type: db.Sequelize.UUID,
      primaryKey: true,
      defaultValue: db.Sequelize.UUIDV4,
      unique: true
    },
    name: {
      type: db.Sequelize.STRING,
      unique: true
    }
  });

module.exports = User;
