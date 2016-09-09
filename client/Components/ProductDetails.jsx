import React from 'react';

const ProductDetails = (props) => (
  <div>{props.name}: {props.lng}, {props.lat}</div>
);

ProductDetails.propTypes = {
  name: React.PropTypes.string,
  lat: React.PropTypes.string,
  lng: React.PropTypes.string
};

export default ProductDetails;
