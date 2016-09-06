const Location = require('../models/locationModel');

const locationController = {
  getAll (req, res) {
    Location.findAll()
      .then((locations) => res.send(locations))
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
    Location.create(req.body)
      .then(() => res.end())
      .catch((err) => res.status(500).send(err));
  }
};

module.exports = locationController;
