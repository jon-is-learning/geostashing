import React from 'react';

const Product = (props) => (
  <li className="catalog">
      <img src={
        props.info.image
        ? props.info.image.url
        : '/default-image.svg'
      } />
      <h3>${props.info.price} - {props.info.name}</h3>
      <p>{props.info.description}</p>
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
