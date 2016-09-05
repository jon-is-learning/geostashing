var Sequelize = require('sequelize');
var sequelize = new Sequelize('geostash', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres'
});

var Location = sequelize.define('location', {
  name: Sequelize.STRING,
  lat: Sequelize.DECIMAL(9, 6),
  lng: Sequelize.DECIMAL(9, 6)
});

Location.sync({force: true})
  .then(function() {
    return Location.bulkCreate([
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
    ]);
  })
  .then(function(location) {
    console.log('Test location created with model sync inside locationModel.js. dataValues: ');
    location.forEach(function(item) {
      console.log(item.dataValues);
    });
  });

module.exports = Location;
