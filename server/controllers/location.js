const Location = require('../models/locationModel');
const https = require('https');

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
  },

  suggestions(req, res) {
    const requestApiEndpoint
      = '/maps/api/place/autocomplete/json'
      + '?key=AIzaSyC1LzP_Enai38ao4P2ZIVbbgbPCpPuvxQA'
      + '&types=(regions)'
      + `&input=${encodeURIComponent(req.body.search)}`;

    const options = {
      host: 'maps.googleapis.com',
      path: requestApiEndpoint
    };

    const suggestionReq = https.request(options, (apiRes) => {
      let apiResData = '';

      apiRes.on('data', (data) => {
        apiResData += data;
      });

      apiRes.on('end', () => {
        apiResData = JSON.parse(apiResData)
          .predictions.map((pred) => pred.description);
        res.json(apiResData);
      });
    });

    suggestionReq.end();
  }
};

module.exports = locationController;
