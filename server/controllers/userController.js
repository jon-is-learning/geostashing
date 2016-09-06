const USER = require('../models/userModel');

const USERSCONTROLLER = {

  getOne (req, res) {
    USER
      .findOne(req.body)
      .then((user) => res.status(200).send(user))
      .catch((err) => res.status(400).send(err));
  },

  addOne (req, res) {
    USER
      .create(req.body)
      .then((user) => res.status(200).send(user))
      .catch((err) => res.status(400).send(err));
  }

};

module.exports = USERSCONTROLLER;
