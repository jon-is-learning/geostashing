var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = (app, express) => {
	app.use(morgan);
	app.use(bodyParser);
	app.use(express.static('client'));
};
