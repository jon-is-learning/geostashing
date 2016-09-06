import React from 'react';

class Map extends React.Component {
  componentDidMount() {
    /* global google */
    //should be defined at this point

    const pos = {
      lat: this.props.lat,
      lng: this.props.lng
    };

    this.setState({
      map: new google.maps.Map(this.refs.map, {
        center: pos,
        zoom: this.props.zoom
      })
    });

    this.props.pins.forEach((pin) =>
      new google.maps.Marker({ map: this.state.map, position: pin }));
  }

  componentWillUpdate(props) {
    props.pins.map((pin) => ({
      lat: parseFloat(pin.lat),
      lng: parseFloat(pin.lng)
    })).forEach((pin) =>
      new google.maps.Marker({ map: this.state.map, position: pin }));

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
