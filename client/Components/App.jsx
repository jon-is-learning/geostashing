import React from 'react';
import Catalog from './Catalog.jsx';
import AddProduct from './AddProduct.jsx';
import Navbar from './Navbar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addProduct() {
    this.setState({ addProduct: !this.state.addProduct });
  }

  render() {
    return (
      <div>
        <Navbar page={{ find: 'active' }}/>
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
