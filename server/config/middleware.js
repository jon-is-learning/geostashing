const bodyParser = require('body-parser');
const session = require('express-session');

module.exports = (app, express) => {
  app.use(express.static('client/public'));
  app.use(session({
    secret: '12345abcde',
    resave: true,
    saveUninitialized: false,
    cookie: { 
      secure: false,
      httpOnly: false,
      expires: new Date(Date.now() + (30 * 86400 * 1000))
    }
  }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
};
