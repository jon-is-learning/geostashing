import React from 'react';
import Catalog from './Catalog.jsx';
import AddProduct from './AddProduct.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    //this.state = {
      //pins: [],
    //};

    //const getPins = new Request('/api/locations');

    //fetch(getPins)
      //.then((res) => res.json())
      //.then((res) => this.setState({ pins: res }));

  }

  addProduct() {
    this.setState({ addProduct: !this.state.addProduct });
  }

  render() {
    return (
      <div>
        <a onClick={this.addProduct.bind(this)}>add product</a>
        <Catalog />
        {
          this.state.addProduct
          ? <AddProduct />
          : null
        }
      </div>
    );
  }
}

export default App;
