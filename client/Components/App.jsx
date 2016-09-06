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

  }

  render() {
    return (
      <div>
        <h1>Hi there, beard person.</h1>
        <GetLocation />
        <Map
          lat={37.7837678}
          lng={-122.40914660000001}
          pins={[
            { lat: 37.7837678, lng: -122.40914660000001 }
          ]}/>
          
        <SignIn />
        <SignUp />
        
      </div>
    );
  }
}

export default App;


