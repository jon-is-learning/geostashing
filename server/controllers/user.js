const User = require('../models/userModel');

const userController = {
  getOne (req, res) {
    User.findOne(req.body)
      .then((user) => res.status(200).send(user))
      .catch((err) => res.status(500).send(err));
  },

  addOne (req, res) {
    User.create(req.body)
      .then((user) => res.status(200).send(user))
      .catch((err) => res.status(500).send(err));
  }
};

module.exports = userController;
