const db = require('./db');

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
      unique: true,
      allowNull: false
    }
  });

module.exports = User;
