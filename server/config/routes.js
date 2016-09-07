var router = require('express').Router();

//require all controllers here

//router.get('/', (req, res) => res.send());

router.get('/signin', (req, res) => 
	// If valid login, go to root
	res.redirect());
	// If unvalid signin, go back to signin

router.post('/signup', (req, res) => 
	// If valid signup, go to root
	res.redirect());
	// If unvalid signup, go back to sign up



module.exports = router;
