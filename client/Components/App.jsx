import React from 'react';
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

  registerClick() {
    /* <p>Username already in use.</p> */
  }

  signInClick() {
      /* <p>Invalid username and/or password</p> */
  }

  render() {
    return (
      <div>
        <a href="#/signin">signin</a>
        <a href="#/signup">signup</a>
        <h1>Hi there, beard person.</h1>

        <Catalog products={this.state.products} />
      </div>
    );
  }
}

export default App;
