import React from 'react';
import Product from './Product.jsx';

class Catalog extends React.Component {
  constructor(props) {
    super(props);

    this.state = { filter: null };
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

  render() {
    return (
      <div className="catalog">
        <input
          onChange={() => this.updateFilter(this.refs.search.value)}
          ref="search"
          type="text"
          name="search"
          placeholder="search"/>
        <ul className="products">
          {
            this.props.products
              .filter(this.filterProduct.bind(this))
              .map((product, index) =>
                <Product key={index} info={product}/>)
          }
        </ul>
      </div>
    );
  }
}

Catalog.propTypes = { products: React.PropTypes.array };
Catalog.defaultProps = { products: [] };

export default Catalog;
