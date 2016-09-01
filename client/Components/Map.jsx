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

    var infoWindow = new google.maps.InfoWindow({
      map: map,
      position: pos,
      content: 'You Are Here'
    });
    console.log(infoWindow);
    // We can have info windows and pins
    // TODO: Use some fun emoji for our pins!
    var marker = new google.maps.Marker({
      map: map,
      position: pos
    });
  }

  render() {
    return (<div className="map"></div>);
  }
}

export default Map;
