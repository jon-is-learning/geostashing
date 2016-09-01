import React from 'react'; 
import ReactDOM from 'react-dom'; 

class Users extends React.Component {
  

  render() {

    return (
      <div>
        <h1>SIGN IN</h1>
        <h4>Username</h4>
        <input />
        <h4>Password</h4>
        <input /><br></br>
        <a href='#'>Register</a>
        <button onClick=''>Login</button>
      </div>
    )
  }
}

export default Users; 