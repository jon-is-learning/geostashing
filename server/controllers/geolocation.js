const LOCATION = require('../models/locationModel');

const LOCATIONSCONTROLLER = {

  getAll (req, res) {
    LOCATION
      // .all() would also work I believe
      .findAll()
      .then((locations) => res.status(200).send(locations))
      .catch((err) => res.status(400).send(err));
  },

  addOne (req, res) {
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
      .then((location) => res.status(200).send(location))
      .catch((err) => res.status(400).send(err));
  }

};

module.exports = LOCATIONSCONTROLLER;
