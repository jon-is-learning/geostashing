import React from 'react';
/* import { Router, Route, Link } from 'react-router'; */

// class SignUp extends React.Component {
//   submitNewUser(ev) {
//     console.log('USERNAME: ', this.refs.username.value);
//     ev.preventDefault();
//     const newUser = {
//       name: this.refs.username.value,
//       password: this.refs.password.value
//     };

//     const userReq = new Request('/api/users', {
//       method: 'POST',
//       body: JSON.stringify(newUser),
//       headers: { 'content-type': 'application/json' }
//     });

//     fetch(userReq).then(function(response) {
//       console.log(response);
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Sign Up!</h1>
//         <form>
//           <h4>Username</h4>
//           <input
//             ref="username"
//             type="text" />
//           <h4>Password</h4>
//           <input
//             ref="password"
//             type="password"/>
//           <input
//             type="submit"
//             onClick={this.submitNewUser.bind(this)}/>
//       </form>
//       </div>
//     );
//   }

// }

import { withRouter } from 'react-router';

const SignUp = withRouter(
  React.createClass({
    getInitialState() {
      return {
        error: false,
        username: '',
        password: '',
        confirmedPassword: ''
      };
    },

    userNameInfoChange(event) {
      this.setState({ username: event.target.value });
    },

    userPasswordChange(event) {
      this.setState({ password: event.target.value });
    },

    confirmedPasswordChange(event) {
      this.setState({ confirmedPassword: event.target.value });
    },

    checkSignUpInfo(event) {
      event.preventDefault();

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
      );
    }
  })
);

export default SignUp;
