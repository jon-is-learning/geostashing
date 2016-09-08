const express = require('express');
const router = new express.Router();

const locations = require('../controllers/location');
const user = require('../controllers/user');

router.get('/api/locations', locations.getAll);
router.post('/api/locations', locations.addOne);

router.get('/api/users/:name', user.getOne);
router.post('/api/users', user.addOne);

router.get('/signin', (req, res) => res.redirect());

router.post('/signup', (req, res) => res.redirect());

module.exports = router;
