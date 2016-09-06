const LOCATION = require('../models/locationModel');

const LOCATIONSCONTROLLER = {

  getAll (req, res) {
    LOCATION
    // .all() would also work I believe
      .findAll()
      .then((locations) => {
        // console.log('Result of getAll in LOCATIONSCONTROLLER: ', locations);
        res.status(200).send(locations);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send(err);
      });
  },

  addOne (req, res) {
    // console.log('POST request body in LOCATIONSCONTROLLER: ', req.body);
    if ((typeof req.body !== 'object')
        || !('name' in req.body)
        || !('lat' in req.body)
        || !('lng' in req.body)) {
      res.status(400).send('Not enough data to create new location.');

      return;
    }
    LOCATION
    // Create builds a new model instance and calls save on it
      .create(req.body)
      // on success, the new model instance is passed along
      .then((location) => {
        // Send model to confirm save worked.
        // Client can do something with it if desired.
        res.status(200).send(location);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send(err);
      });
  }

};

module.exports = LOCATIONSCONTROLLER;
