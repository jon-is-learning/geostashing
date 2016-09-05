const LOCATION = require('../models/locationModel.js')

var printError = function(err) {
  console.log(err);
  res.status(400).send(err);
};

const LOCATIONSCONTROLLER = {

getAll (req, res) {
  LOCATION
    .findAll() // .all() would also work I believe
    .then(function(locations) {
      // console.log('Result of getAll in LOCATIONSCONTROLLER: ', locations);
      res.status(200).send(locations);
    })
    .catch(printError);
},


addOne (req, res) {
  console.log('POST request body in LOCATIONSCONTROLLER: ', req.body);
  if ((typeof req.body !== 'object')
      || !('name' in req.body)
      || !('lat' in req.body)
      || !('lng' in req.body)) {
    res.status(400).end();
    return;
  }
  LOCATION
    .create(req.body) // Create builds a new model instance and calls save on it
    .then(function(location) { // on success, the new model instance is passed along

      res.status(200).send(location) // Send model to confirm save worked and so client can do something with it if desired.
    })
    .catch(printError);
}


}

module.exports = LOCATIONSCONTROLLER;
