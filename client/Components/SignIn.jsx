import React from 'react';
import { Link, withRouter } from 'react-router';

import auth from './../auth.js';

const SignIn = withRouter (
  React.createClass({
    getInitialState() {
      return {
        error: false,
        username: '',
        password: ''
      }
    },

    userNameInfoChange (e) {
      this.setState({
        username: e.target.value
      })
    },

    userPasswordChange (e) {
      this.setState({
        password: e.target.value
      })
    },

    checkLoginInfo(e) {
      e.preventDefault();


      //We will check to see if they are logged in with the auth functionality

      console.log(this.state.username);
      console.log(this.state.password);
    },


    render () {
      return (
        <div>
          <h1>SIGN IN</h1>
          <form className="sign-in" onSubmit={this.checkLogin}>
            <h4>Username</h4>
            <input type="text" onChange={this.userNameInfoChange}/>
            <h4>Password</h4>
            <input type="password" onChange={this.userPasswordChange} />
            <input type="submit" />
          </form>
          <Link to="signup" className="link">Register</Link>
        </div>
      )
    }
  })

);

export default SignIn;



// () =>
//     <div>
//       <h1>SIGN IN</h1>
//       <h4>Username</h4>
//       <input type="text" />
//       <h4>Password</h4>
//       <input type="password" />
//       <input type="submit" />
//       <Link to="signup">Register</Link>
//     </div>;