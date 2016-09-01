var express = require('express');

var middleware = require('./config/middleware.js');
var router = require('./config/routes.js');

var app = express();

app.use(router);

middleware(app, express);

app.listen(3000, () => {
	console.log('listening on 3000');
});
