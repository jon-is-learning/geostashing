import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: props.lat,
      lng: props.lng,
      zoom: props.zoom || 8
    }
  }

  componentDidMount() {
    console.log('mounted', ReactDOM.findDOMNode(this));

    var map = new google.maps.Map(ReactDOM.findDOMNode(this), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }

  render() {
    return (<div className="map"></div>)
  }
}

export default Map;
