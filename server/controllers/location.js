const Location = require('../models/locationModel');

const locationController = {
  getAll(req, res) {
    Location.findAll({})
      .then((locations) => res.send(locations))
      .catch((err) => res.status(400).send(err));
  },

  addOne(req, res) {
    Location.create(req.body)
      .then(() => res.end())
      .catch((err) => res.status(400).send(err));
  },

  deleteOne(req, res) {
    Location
      .findOne({ where: req.params })
      .then((location) => location.destroy())
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(500).send(err));

  }

};

module.exports = locationController;
