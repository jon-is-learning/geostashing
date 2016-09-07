const db = require('./db');
const User = require('./userModel');

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

User.hasMany(Location, {
  foreignKey: {
    name: 'userId',
    allowNull: false
  }
});
// Comment out the following to keep terminal from clutter:
// Uncomment out the following to add tables to your db:
// Add {force: true} to .sync() if you want to drop existing tables
User.sync()
  .then(() =>
    User.create({ name: 'testOne' })
  )
  .then((user) => {
    // console.log('User table create with test user: ', user.dataValues);
    Location
      .sync()
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
      // .then((location) => {
      //   console.log('locationModel.js. dataValues: ');
      //   location.forEach((item) => {
      //     console.log(item.dataValues);
      //   });
      // })
  })
  .catch((err) => {
    console.log('Table could not be created. Error: ', err);
  });


module.exports = Location;
