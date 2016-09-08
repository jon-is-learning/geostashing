import React from 'react';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import Map from './Map.jsx';
import Catalog from './Catalog.jsx';
import AddProduct from './AddProduct.jsx';

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

  selectCoords(lng, lat) {
    this.setState({
      lng,
      lat
    });
  }

  render() {
    return (
      <div>
        <a href="#/signin">signin</a>
        <a href="#/signup">signup</a>
        <h1>Hi there, beard person.</h1>
        <Map
          selectCoords={this.selectCoords.bind(this)}
          lat={37.7837678}
          lng={-122.40914660000001}
          pins={this.state.pins} />

        <AddProduct lng={this.state.lng} lat={this.state.lat}/>
        <Catalog products={this.state.products} />
      </div>
    );
  }
}

export default App;
