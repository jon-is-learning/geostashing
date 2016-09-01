import React from 'react';
import GetLocation from './CurrentLocation.jsx';

class App extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div>
        <h1>Hi there, beard person.</h1>
        <GetLocation />
      </div>
    )
  }
}

export default App;