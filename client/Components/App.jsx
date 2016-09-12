import React from 'react';
import Catalog from './Catalog.jsx';
import AddProduct from './AddProduct.jsx';
import Navbar from './Navbar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pins: [],
      products: [],
      page: 'find'
    };

    const getPins = new Request('/api/locations');

    fetch(getPins)
      .then((res) => res.json())
      .then((res) => this.setState({ pins: res }));
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

  showProduct(prodId) {

    console.log('showing product with id ', prodId);
    this.setState({ page: 'show' });
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
      </div>
    );
  }
}

export default App;
