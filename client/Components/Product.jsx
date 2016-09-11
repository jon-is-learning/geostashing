import React from 'react';

const Product = (props) => (
  <li className="collection-item avatar">
    <img src={
        props.info.images[0]
        ? props.info.images[0].url
        : '/default-image.svg'}
        className="responsive-img circle"/>
    <span className="title">${props.info.price} - {props.info.name}</span>
    <p>
      by {props.info.seller.name}<br/>
      {props.info.description}
    </p>
    <a href="#!" className="secondary-content">
      {props.info.location.lng}, {props.info.location.lat}
    </a>
  </li>
);

Product.propTypes = { info: React.PropTypes.object };

export default Product;
