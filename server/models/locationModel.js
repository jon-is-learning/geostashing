const db = require('./db');

const totalNumLength = 9;
const decimalPlaces = 6;

const Location = db.sequelize.define('location', {
  name: db.Sequelize.STRING,
  lat: db.Sequelize.DECIMAL(totalNumLength, decimalPlaces),
  lng: db.Sequelize.DECIMAL(totalNumLength, decimalPlaces)
});

Location.sync({ force: true })
  .then(() =>
    Location.bulkCreate([
      {
        name: 'Jon\'s Test Location',
        lat: 123.456789,
        lng: 123.456789
      },
      {
        name: 'Hack Reactor',
        lat: 37.7840795,
        lng: -122.4087025
      }
    ])
  )
  .then((location) => {
    console.log('locationModel.js. dataValues: ');
    location.forEach((item) => {
      console.log(item.dataValues);
    });
  });

module.exports = Location;
