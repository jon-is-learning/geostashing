import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: props.lat   || 0,
      lng: props.lng   || 0,
      zoom: props.zoom || 8,
      pins: props.pins || []
    };
  }

  componentDidMount() {
    var pos = {
      lat: this.state.lat,
      lng: this.state.lng
    };

    var map = new google.maps.Map(ReactDOM.findDOMNode(this), {
      center: pos,
      zoom: 8
    });

    this.state.pins.forEach((pin) => {
      var marker = new google.maps.Marker({
        map: map,
        position: pin
      });
    });
  }

  render() {
    return (<div className="map"></div>);
  }
}

export default Map;
