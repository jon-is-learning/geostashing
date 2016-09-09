import React from 'react';
 import { Link, withRouter } from 'react-router'; 




const SignUp = withRouter (
  React.createClass({
    getInitialState() {
      return {
        error: false,
        username: '',
        password: '',
        confirmedPassword: ''
      }
    },

    userNameInfoChange (e) {
      this.setState({
        username : e.target.value
      })
    },

    userPasswordChange (e) {
      this.setState({
        password: e.target.value
      })
    },

    confirmedPasswordChange (e) {
      this.setState({
        confirmedPassword: e.target.value
      })
    },

    checkSignUpInfo (e) {

      e.preventDefault();

      console.log(this.state)

    },

    render() {
      return (
        <div>
          <h1>JOIN THE ADVENTURE</h1>
          <form onSubmit={this.checkSignUpInfo}>
            <h4>Username</h4>
            <input type="text" onChange={this.userNameInfoChange} />
            <h4>Password</h4>
            <input type="password" onChange={this.userPasswordChange} />
            <h4>Confirm Password</h4>
            <input type="password" onChange={this.confirmedPasswordChange} />
            <input type="submit" />
          </form>
        </div>
      )
    }
  })
);

export default SignUp;
