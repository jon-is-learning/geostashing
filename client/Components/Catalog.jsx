import React from 'react';
import Product from './Product.jsx';

class Catalog extends React.Component {
  render() {
    console.log(this.props.products);

    return (
      <div className="catalog">
        <input type="text" name="search" placeholder="search"/>
        <ul className="products">
          {
            this.props.products.map((product, index) =>
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
