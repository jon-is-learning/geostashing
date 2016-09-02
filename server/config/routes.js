const express = require('express');
const router = new express.Router();

const geolocations = require('../controllers/geolocation.js');

router.get('/api/geolocations', geolocations.getAll);
router.post('/api/geolocations', geolocations.addOne);

module.exports = router;
