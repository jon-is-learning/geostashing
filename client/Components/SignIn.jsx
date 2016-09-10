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

    // userNameInfoChange (e) {
    //   this.setState({
    //     username: e.target.value
    //   })
    // },

    userPasswordChange (e) {
      this.setState({
        password: e.target.value
      })
    },

    checkLoginInfo(e) {

      e.preventDefault();
      
      console.log(this.refs.username.value);

      // auth.login(this.state.username, this.state.password, (loggedIn) => {
      //   if (!loggedIn) {
      //     console.log('Not loggedin')
      //     return this.setState({ error: true })
      //   }

      //   const { location } = this.props

      //   if (location.state && location.state.nextPathname) {
      //     this.props.router.replace(location.state.nextPathname)
      //   } else {
      //     this.props.router.replace('/home')
      //   }
      // })
      //We will check to see if they are logged in with the auth functionality
    },


    render () {
      return (
        <div>
          <h1>SIGN IN</h1>
          <form onSubmit={this.checkLoginInfo}>
            <h4>Username</h4>
            <input ref="username" type="text" />
            <h4>Password</h4>
            <input ref="password" type="password" />
            <input type="submit" />
          </form>
          <Link to="signup">Register</Link>
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