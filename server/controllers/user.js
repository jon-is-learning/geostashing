const User = require('../models/userModel');

const userController = {
  getOne(req, res) {
    User
      .findOne({ where: req.params })
      .then((user) => res.status(200).send(user))
      .catch((err) => res.status(500).send(err));
  },

  addOne(req, res) {
    console.log(req.body); 
    User
      .create(req.body)
      .then((user) => {
        console.log("It works!"); 
        console.log(user.dataValues); 
        res.status(200).send(user.dataValues); 
      })
      .catch((err) => {
        console.log("Not working...", err); 
        res.status(500).send(err)
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
