module.exports.getAll = (req, res) => {
  const fakeData = [
    { name: 'hack reactor', lat: 37.7840795, lng: -122.4087025 }
  ];

  res.json(fakeData);
};

module.exports.addOne = (req, res) => {
  if ((typeof req.body !== 'object')
      || !('name' in req.body)
      || !('lat' in req.body)
      || !('lng' in req.body)) {
    res.status(400).end();

    return;
  }

  res.end();
};
