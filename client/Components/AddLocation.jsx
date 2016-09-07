import React from 'react';

class AddLocation extends React.Component {
  render() {
    return (
      <form method="POST" action="/api/locations">
        <input
          name="name"
          type="text"
          placeholder="place name"/>
        <input
          name="lng"
          type="text"
          readOnly="true"
          value={this.props.lng}
          placeholder="longitude"/>
        <input
          name="lat"
          type="text"
          readOnly="true"
          value={this.props.lat}
          placeholder="latitude"/>
        <input name="submit" type="submit"/>
      </form>
    );
  }

  submitPin(pin) {
    const pinReq = new Request('/api/locations', {
      method: 'POST',
      body: JSON.stringify(pin),
      headers: { 'content-type': 'application/json' }
    });

    fetch(pinReq)
      .then((res) => res.text())
      .then(() => this.drawPins([pin]));
  }

}

AddLocation.propTypes = {
  lat: React.PropTypes.number,
  lng: React.PropTypes.number
};

AddLocation.defaultProps = {
  lat: 0,
  lng: 0
};

export default AddLocation;
