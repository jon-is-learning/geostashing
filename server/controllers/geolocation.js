module.exports.getAll = (req, res) => {
  var fakeData = [
    { name: 'hack reactor',
      lat: 37.7840795,
      lng: -122.4087025
    }
  ];

  res.json(fakeData);
};

module.exports.addOne = (req, res) => {
  if ((typeof req.body !== 'object')
      || req.body.name === undefined
      || req.body.lat === undefined
      || req.body.lng === undefined) {
    return res.status(400).end();
  }

  res.end();
};
