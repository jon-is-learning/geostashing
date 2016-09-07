const db = require('./db');

const User = db.sequelize.define('user',
  {
    id: {
      type: db.Sequelize.UUID,
      unique: true
      primaryKey: true,
      defaultValue: db.Sequelize.UUIDV4,
    },
    name: {
      type: db.Sequelize.STRING,
      unique: true,
      allowNull: false
    }
  });

module.exports = User;
