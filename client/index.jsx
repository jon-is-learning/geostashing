import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './Components/App.jsx';
import AddProduct from './Components/AddProduct.jsx';
import SignIn from './Components/SignIn.jsx';
import SignUp from './Components/SignUp.jsx';

const router = (
<Router history={hashHistory}>
  <Route path="/" component={App}></Route>
  <Route path="/add" component={AddProduct}></Route>
  <Route path="signin" component={SignIn}></Route>
  <Route path="signup" component={SignUp}></Route>
</Router>
);

ReactDOM.render(router, document.getElementById('app'));
