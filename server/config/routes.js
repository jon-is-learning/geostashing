var router = require('express').Router();

var geolocations = require('../controllers/geolocation.js');

//router.get('/', (req, res) => res.send());
router.get('/api/geolocations', geolocations.getAll);
router.post('/api/geolocations', geolocations.addOne);

module.exports = router;
