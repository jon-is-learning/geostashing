import React from 'react'
import auth from '../auth.js'

class Logout extends React.Component {
  componentWillMount() {
    $.ajax({
      url: '/api/users/signOut',
      method: 'GET',
      success: (data) => {
        console.log('Session should be deleted');
      },
      error: function(err) {
        console.log(err);
      }
    });
  }
  
  componentDidMount() {
    auth.logout();
  }

  render() {
    return <p>You are now logged out</p>
  }
}

export default Logout