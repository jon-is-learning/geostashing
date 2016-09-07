const User = require('../models/userModel');

const userController = {
  getOne (req, res) {
    // console.log('User controller getOne: ', req.params);
    User
      .findOne({ where: req.params })
      .then((user) => res.status(200).send(user))
      .catch((err) => res.status(500).send(err));
  },

  addOne (req, res) {
    // console.log('User controller addOne: ', req.body);
    User
      .create(req.body)
      .then((user) => res.status(200).send(user))
      .catch((err) => res.status(500).send(err));
  }
};

module.exports = userController;
