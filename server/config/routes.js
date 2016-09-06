const express = require('express');
const router = new express.Router();

const locations = require('../controllers/location');
const user = require('../controllers/userController');

router.get('/api/locations', locations.getAll);
router.post('/api/locations', locations.addOne);

router.get('/api/users', user.getOne);
router.post('api/users', user.addOne);

module.exports = router;
