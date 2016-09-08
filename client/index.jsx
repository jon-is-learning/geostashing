import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './Components/App.jsx';
import SignIn from './Components/SignIn.jsx';
import SignUp from './Components/SignUp.jsx';

ReactDOM.render(
<Router history={hashHistory}>
<Route path="/"component={App}></Route>
<Route path="signin" component={SignIn}></Route>
<Route path="signup" component={SignUp}></Route>
</Router>,
document.getElementById('app'));
