import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: props.lat,
      lng: props.lng,
      zoom: props.zoom,
      pins: props.pins
    };
  }

  componentDidMount() {
    /* global google */
    //should be defined at this point

    const pos = {
      lat: this.state.lat,
      lng: this.state.lng
    };

    const map = new google.maps.Map(this.refs.map, {
      center: pos,
      zoom: 8
    });

    this.state.pins.forEach((pin) =>
      new google.maps.Marker({ map, position: pin }));
  }

  render() {
    return (<div className="map" ref="map"></div>);
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
