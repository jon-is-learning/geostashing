import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: props.lat,
      lng: props.lng,
      zoom: props.zoom || 8
    };
  }

  componentDidMount() {
    console.log('mounted', ReactDOM.findDOMNode(this));

    var pos = {lat: 37.7837678, lng: -122.40914660000001};
    var map = new google.maps.Map(ReactDOM.findDOMNode(this), {
      center: pos,
      zoom: 8
    });

    var infoWindow = new google.maps.InfoWindow({map: map});
    infoWindow.setContent('Location found.');
    infoWindow.setPosition(pos);
    console.log(infoWindow);
  }

  render() {
    return (<div className="map"></div>);
  }
}

export default Map;
