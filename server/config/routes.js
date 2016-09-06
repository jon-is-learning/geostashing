const express = require('express');
const router = new express.Router();

const geolocations = require('../controllers/geolocation');
const USERS = require('../controllers/userController');

router.get('/api/geolocations', geolocations.getAll);
router.post('/api/geolocations', geolocations.addOne);

router.get('/api/users', USERS.getOne);
router.post('api/users', USERS.addOne);

module.exports = router;
