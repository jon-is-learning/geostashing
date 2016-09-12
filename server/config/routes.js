const express = require('express');
const router = new express.Router();

const locations = require('../controllers/location');
const user = require('../controllers/user');
const product = require('../controllers/product');
const image = require('../controllers/image');

router.get('/api/locations', locations.getAll);
router.post('/api/locations', locations.addOne);
router.delete('/api/locations/:name', locations.deleteOne);

// router.post('/api/users', user.getAll);
router.post('/api/users/:name', user.getOne);
router.post('/api/users', user.addOne);
router.get('/api/users/signOut', user.signOut);
// router.delete('/api/users/:name', user.deleteOne);

router.get('/api/products', product.getAll);
router.post('/api/products', product.addOne);

router.post('/api/images', image.addOne);

module.exports = router;
