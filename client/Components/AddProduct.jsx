import React from 'react';
import Dropzone from 'react-dropzone';

//for the most part this is really just a form which sends a post request on
//submit
//images are handled a bit differently. When an image is chosen it will
//immediately begin uploading to the server which returns an id. This id can
//then be to the post request
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

        <Dropzone onDrop={this.onFile.bind(this)}>
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
    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = (event) => this.sendFile({
        name: file.name,
        data: event.target.result
      });
      reader.readAsDataURL(file);
    });
  }

  sendFile(file) {
    const postFiles = new Request('/api/images', {
      method: 'POST',
      body: file.data
    });

    fetch(postFiles)
      .then((res) => res.json())
      .then((res) => console.log(res));
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
