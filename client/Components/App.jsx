import React from 'react';
import Catalog from './Catalog.jsx';
import AddProduct from './AddProduct.jsx';
import Navbar from './Navbar.jsx';
import ProductDetails from './ProductDetails.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 'find' };
  }

  addProduct(ev) {
    ev.preventDefault();

    this.setState({
      page: this.state.page === 'create'
        ? 'find'
        : 'create'
    });
  }

  findProduct(ev) {
    ev.preventDefault();

    console.log('finding...');
    this.setState({ page: 'find' });
  }

  showProduct(prod) {

    console.log('showing product with id ', prod);
    this.setState({
      page: 'show',
      currentProduct: prod
    });
  }

  purchase(item) {
    console.log('purchasing', item);
  }

  render() {
    return (
      <div>
        <Navbar
          gotoCreate={this.addProduct.bind(this)}
          gotoFind={this.findProduct.bind(this)}
          page={this.state.page}/>
        <Catalog showProduct={this.showProduct.bind(this)}/>
        {
          this.state.page === 'create'
          ? <div className="sidebar z-depth-1">
              <AddProduct onClose={this.addProduct.bind(this)}/>
            </div>
          : null
        }
        {
          this.state.page === 'show'
          ? <div className="sidebar z-depth-1">
              <ProductDetails
                onClose={this.findProduct.bind(this)}
                info={this.state.currentProduct}
                onPurchase={this.purchase.bind(this)}/>
            </div>
          : null
        }
      </div>
    );
  }
}

export default App;
