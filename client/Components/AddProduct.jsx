import React from 'react';
import Dropzone from 'react-dropzone';

//for the most part this is really just a form which sends a post request on
//submit
//images are handled a bit differently. When an image is chosen it will
//immediately begin uploading to the server which returns an id. This id can
//then be to the post request
class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  render() {
    return (
      <form method="POST" action="/api/locations" className="new-product">
        <h3>create new product</h3>
        <input
          ref="name"
          type="text"
          placeholder="item name"/>

        <textarea
          ref="description"
          placeholder="description"></textarea>

        <input
          ref="price"
          type="text"
          placeholder="price"/>

        <input
          ref="lng"
          type="text"
          readOnly="true"
          value={this.props.lng}
          placeholder="longitude"/>

        <input
          ref="lat"
          type="text"
          readOnly="true"
          value={this.props.lat}
          placeholder="latitude"/>

        <Dropzone onDrop={this.onFile.bind(this)}>
          <div>drop images here or click to upload.</div>
          {
            this.state.images.map((image, index) =>
                <img key={index} src={image.url} />)
          }
        </Dropzone>

        <input
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
      .then((res) =>
        this.setState({ images: this.state.images.concat([res]) }));
  }

  submit(event) {
    const data = {
      name: this.refs.name.value,
      description: this.refs.description.value,
      price: this.refs.price.value,
      images: this.state.images.map((image) => image.id),
      location: {
        lat: this.refs.lat.value,
        lng: this.refs.lng.value
      }
    };

    console.log('submitting:', data);

    const prodRequest = new Request('/api/products', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });

    fetch(prodRequest)
      .then((res) => res.json())
      .then((res) => console.log(res));

    event.preventDefault();
  }
}

AddProduct.propTypes = {
  lat: React.PropTypes.number,
  lng: React.PropTypes.number
};


export default AddProduct;
