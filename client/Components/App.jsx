import React from 'react';
import Map from './Map.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hi there, beard person.</h1>
        <Map />
      </div>
    )
  }
}

export default App;
