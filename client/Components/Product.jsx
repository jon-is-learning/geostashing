import React from 'react';

const Product = (props) => (
  <li className="catalog">
      <p><h3>{props.info.name}</h3> {props.info.description}</p>
      <p>{props.info.seller.name} (rating...)</p>
      <p>
        {props.info.location.name} (
          {props.info.location.lng},
          {props.info.location.lat})
      </p>
  </li>
);

Product.propTypes = { info: React.PropTypes.object };

export default Product;
