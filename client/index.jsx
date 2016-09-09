import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';

import App from './Components/App.jsx';
import SignIn from './Components/SignIn.jsx';
import SignUp from './Components/SignUp.jsx';
import auth from './auth.js';

const requireAuth = (nextState, replace) => {
  if(!auth.loggedIn()) {
    replace({
      pathname: '/SignIn',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}


class AppRouter extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={requireAuth}></Route> 
          <Route path="signIn" component={SignIn}></Route>
          <Route path="signUp" component={SignUp}></Route>
      </Router>
    )
  }
}

ReactDOM.render(<AppRouter />, document.getElementById('app'));
