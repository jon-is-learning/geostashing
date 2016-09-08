const db = require('./db');

const Location = require('./locationModel');

const User = db.sequelize.define('user', {
  id: {
    type: db.Sequelize.UUID,
    unique: true,
    primaryKey: true,
    defaultValue: db.Sequelize.UUIDV4
  },
  name: {
    type: db.Sequelize.STRING,
    unique: true,
    allowNull: false
  }
});

User.hasMany(Location, {
  foreignKey: {
    name: 'userId',
    allowNull: false
  }
});

module.exports = User;
