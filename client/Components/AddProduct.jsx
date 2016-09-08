import React from 'react';
import Dropzone from 'react-dropzone';


class AddProduct extends React.Component {
  render() {
    return (
      <form method="POST" action="/api/locations">
        <h3>create new product</h3>
        <input
          ref="name"
          name="name"
          type="text"
          placeholder="item name"/>

        <textarea
          ref="description"
          name="description"
          placeholder="description"></textarea>

        <input
          ref="price"
          name="price"
          type="text"
          placeholder="price"/>

        <input
          ref="lng"
          name="lng"
          type="text"
          readOnly="true"
          value={this.props.lng}
          placeholder="longitude"/>

        <input
          ref="lat"
          name="lat"
          type="text"
          readOnly="true"
          value={this.props.lat}
          placeholder="latitude"/>

        <Dropzone onDrop={this.onFile}>
          <div>drop images here or click to upload.</div>
        </Dropzone>

        <input
          name="submit"
          type="submit"
          onClick={this.submit.bind(this)}/>
      </form>
    );
  }

  onFile(files) {
    console.log('Received files: ', files);
  }

  submit() {
    console.log('this should submit...');
  }
}

AddProduct.propTypes = {
  lat: React.PropTypes.number,
  lng: React.PropTypes.number
};


export default AddProduct;
