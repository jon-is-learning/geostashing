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
    return Location.create({
      name: 'Jon\'s Test Location',
      lat: 123.456789,
      lng: 123.456789
    });
  })
  .then(function(location) {
    console.log(location);
  });