import React from 'react';
import GetLocation from './CurrentLocation.jsx';
import SignIn from './SignIn.jsx'; 
import SignUp from './SignUp.jsx'; 
import Map from './Map.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  registerClick() {
    // Add the username and password into the database
      // If the username already exists, route to register page again with error message. 
      <p>Username already in use.</p>
      // If username doesn't exist, store the pw and username and route to the main page. 

  }

  signInClick() {
    // If username and password exists in the database, route to the main page

    // If username and password does not exist, route to the login page again with error message. 
      <p>Invalid username and/or password</p>

    this.state = { pins: [] };

    const getPins = new Request('/api/locations');

    fetch(getPins)
      .then((res) => res.json())
      .then((res) => this.setState({ pins: res }));
  }

  render() {
    return (
      <div>
        <h1>Hi there, beard person.</h1>
        <Map
          lat={37.7837678}
          lng={-122.40914660000001}
          pins={[
            { lat: 37.7837678, lng: -122.40914660000001 }
          ]}/>

        <SignIn onClick={this.registerClick.bind(this)} />
        <SignUp onClick={this.registerClick.bind(this)} />
        
          pins={this.state.pins}/>
      </div>
    );
  }
}

// <Route path='/' component={Home} />
// <Route path='/address' component={Address} />

export default App;

// onClick={this.onButtonClick.bind(this)

