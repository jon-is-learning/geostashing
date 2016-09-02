const express = require('express');

const middleware = require('./config/middleware.js');
const router = require('./config/routes.js');

const app = express();

app.use(router);

middleware(app, express);

app.listen(3000, () => {
  console.log('listening on 3000');
});

module.exports = app;
