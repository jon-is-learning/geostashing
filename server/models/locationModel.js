const db = require('./db');
const User = require('./userModel');

const totalNumLength = 9;
const decimalPlaces = 6;

const Location = db.sequelize.define('location', {
  id: {
    type: db.Sequelize.UUID,
    primaryKey: true,
    defaultValue: db.Sequelize.UUIDV4,
    unique: true
  },
  name: {
    type: db.Sequelize.STRING,
    unique: true
  },
  lat: db.Sequelize.DECIMAL(totalNumLength, decimalPlaces),
  lng: db.Sequelize.DECIMAL(totalNumLength, decimalPlaces)
});

User.hasMany(Location, {
  foreignKey: {
    name: 'userId',
    allowNull: false
  }
});

User.sync({ force: true })
  .then(() =>
    User.create({ name: 'testOne' })
  )
  .then((user) => {
    console.log('User table create with test user: ', user.dataValues);
    Location
      .sync({ force: true })
      .then(() =>
        Location
          .bulkCreate([
            {
              name: 'Jon\'s Test Location',
              lat: 123.456789,
              lng: 123.456789,
              userId: user.dataValues.id
            },
            {
              name: 'Hack Reactor',
              lat: 37.7840795,
              lng: -122.4087025,
              userId: user.dataValues.id
            }
          ])
      )
      .then((location) => {
        console.log('locationModel.js. dataValues: ');
        location.forEach((item) => {
          console.log(item.dataValues);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log('User table could not be created. Error: ', err);
  });


module.exports = Location;
