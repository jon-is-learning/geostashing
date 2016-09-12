const User = require('../models/userModel');
// const db = require('../models/db.js');

const userController = {
  getOne(req, res) {
    User
      .findOne({ where: req.params })
      .then((user) => res.status(200).send(user))
      .catch((err) => res.status(500).send(err));
  },

  addOne(req, res) {
    User.create({
      name: req.body.username,
      password: req.body.password
    })
      .then(() => {
        console.log('It works!');
        res.status(200).json('Test');
      })
      .catch((err) => {
        console.log('Not working...', err);
        res.status(400).send(err);
      });
  },

  getAll(req, res) {
    User
      .findAll({})
      .then((locations) => res.send(locations))
      .catch((err) => res.status(400).send(err));
  },

  deleteOne(req, res) {
    User
      .findOne({ where: req.params })
      .then((user) => user.destroy())
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(500).send(err));
  }
};

module.exports = userController;
