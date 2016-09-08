import React from 'react';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import Map from './Map.jsx';
import Catalog from './Catalog.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pins: [],
      products: []
    };

    const getPins = new Request('/api/locations');

    fetch(getPins)
      .then((res) => res.json())
      .then((res) => this.setState({ pins: res }));

    const getProducts = new Request('/api/products');

    fetch(getProducts)
      .then((res) => res.json())
      .then((res) => this.setState({ products: res }));
  }

  render() {
    return (
      <div>
        <h1>Hi there, beard person.</h1>
        <Map
          lat={37.7837678}
          lng={-122.40914660000001}
          pins={this.state.pins} />

        <SignIn />
        <SignUp />
        <Catalog products={this.state.products} />
      </div>
    );
  }
}

export default App;
