import React from 'react'; 

var Users = (props) => {

    return (
      <div>
        <h1>SIGN IN</h1>
        <h4>Username</h4>
        <input type='text'/>
        <h4>Password</h4>
        <input type='password' />
        <a href='#'>Register</a>
        <input type='submit' /> 
      </div>
    )
}

export default Users; 

