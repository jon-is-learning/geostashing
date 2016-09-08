const db = require('./db');

const totalNumLength = 9;
const decimalPlaces = 6;

const Location = db.sequelize.define('location', {
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
  },
  lat: {
    type: db.Sequelize.DECIMAL(totalNumLength, decimalPlaces),
    allowNull: false
  },
  lng: {
    type: db.Sequelize.DECIMAL(totalNumLength, decimalPlaces),
    allowNull: false
  }
});

module.exports = Location;
