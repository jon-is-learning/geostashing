const express = require('express');

const middleware = require('./config/middleware.js');
const router = require('./config/routes.js');

const app = express();
const port = 3000;

middleware(app, express);
app.use(router);

app.listen(port, () => {
  console.log('listening on ', port);
});

module.exports = app;
