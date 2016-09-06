import React from 'react';

class Map extends React.Component {
  componentDidMount() {
    /* global google */
    //should be defined at this point

    const pos = {
      lat: this.props.lat,
      lng: this.props.lng
    };

    const map = new google.maps.Map(this.refs.map, {
      center: pos,
      zoom: this.props.zoom
    });

    map.addListener('click', (ev) =>
      this.submitPin({
        lat: ev.latLng.lat().toString(),
        lng: ev.latLng.lng().toString(),
        name: 'test location'
      }));

    this.setState({ map });
    this.drawPins(this.props.pins);
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

  drawPins(pins) {
    pins.map((pin) => ({
      lat: parseFloat(pin.lat),
      lng: parseFloat(pin.lng)
    })).forEach((pin) =>
      new google.maps.Marker({ map: this.state.map, position: pin }));
  }

  componentWillUpdate(props) {
    this.drawPins(props.pins);
  }

  render() {
    return <div className="map" ref="map"></div>;
  }
}

Map.propTypes = {
  lat: React.PropTypes.number,
  lng: React.PropTypes.number,
  zoom: React.PropTypes.number,
  pins: React.PropTypes.array
};

Map.defaultProps = {
  lat: 0,
  lng: 0,
  zoom: 8,
  pins: []
};

export default Map;
