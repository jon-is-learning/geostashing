import React from 'react';
import GetLocation from './CurrentLocation.jsx';
import Map from './Map.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hi there, beard person.</h1>
        <GetLocation />
        <Map />
      </div>
    );
  }
}

export default App;
