import React from 'react';
import Catalog from './Catalog.jsx';
import AddProduct from './AddProduct.jsx';
import Navbar from './Navbar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 'find' };
  }

  addProduct(ev) {
    ev.preventDefault();
    this.setState({
      addProduct: !this.state.addProduct,
      page: !this.state.addProduct 
        ? 'create'
        : 'find'
    });
  }

  findProduct(ev) {
    ev.preventDefault();
    console.log('finding...');
    this.setState({ page: 'find' });
  }

  render() {
    return (
      <div>
        <Navbar
          gotoCreate={this.addProduct.bind(this)}
          gotoFind={this.findProduct.bind(this)}
          page={this.state.page}/>
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
