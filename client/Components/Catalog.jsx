import React from 'react';
import Product from './Product.jsx';
import Map from './Map.jsx';
import BuildSearch from './BuildSearch.jsx';

class Catalog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      filter: null,
      center: null,
      radius: 5
    };

    const getProducts = new Request('/api/products');

    fetch(getProducts)
      .then((res) => res.json())
      .then((res) => this.setState({ products: res }));
  }

  updateFilter(str) {
    let filter = null;
    let regexErr = false;

    if (str.length > 0) {
      try {
        filter = new RegExp(str, 'gi');
      } catch (err) {
        regexErr = true;
      }
    }

    this.setState({ filter, regexErr });
  }

  filterProduct(product) {
    if (!this.state.filter) {
      return true;
    }

    return (
        product.name
        + product.description
        + product.seller.name
        + product.location.name
      ).match(this.state.filter);
  }

  updateCenter(location) {
    console.log('centering around', location);
    this.setState({ center: location });
  }

  updateRadius(distance) {
    console.log('max distance', distance, 'mi');
    this.setState({ radius: distance });
  }

  render() {
    return (
      <div className="catalog">
        <BuildSearch
          updateCenter={this.updateCenter.bind(this)}
          updateRadius={this.updateRadius.bind(this)}
          updateSearch={this.updateFilter.bind(this)}/>
        {
          this.state.center
            ? <Map
              //pins={this.state.products.map((product) => product.location)}
              pins={[{
                lng: this.state.center.lng,
                lat: this.state.center.lat
              }]}
              lat={this.state.center.lat}
              zoom={12}
              lng={this.state.center.lng} />
            : ''
        }
        <ul className="products collection">
          {
            this.state.products
              .filter(this.filterProduct.bind(this))
              .map((product, index) =>
                <Product
                  key={index}
                  info={product}
                  show={this.props.showProduct}/>)
          }
        </ul>
      </div>
    );
  }
}

Catalog.propTypes = { showProduct: React.PropTypes.func };

export default Catalog;
