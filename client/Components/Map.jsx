import React from 'react';
import AddLocation from './AddLocation.jsx';

//the map component basically wraps around the google maps api
//it can take a list of pins (in format specified by api) and display them
//through the google maps api.

//`props.pins` represents a simple json format for specifying pins while
//`this.data.pins` contains the markers created by google maps api

//lifecycle:
//instantiation:
//  pass down props and create an instance variable `data`
//  holding data related to google maps api.
//  -> triggers render
//render:
//  adds the div which will hold the map puts reference to map div in
//  refs.gmap
//  -> triggers componentDidMount
//componentDidMount:
//  now that a DOM element is available google maps can attach
//  to this element and render a map. data.map should now be equal to a
//  google maps object.

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.data = {
      pins: [],
      map: null
    };

    this.state = { currentPin: null };
  }

  componentDidMount() {
    /* global google */
    //should be defined at this point

    const pos = {
      lat: this.props.lat,
      lng: this.props.lng
    };

    this.data.map = new google.maps.Map(this.refs.gmap, {
      center: pos,
      zoom: this.props.zoom
    });

    this.data.map.addListener('click', (ev) => this.setState({
      currentPin: {
        lat: ev.latLng.lat(),
        lng: ev.latLng.lng()
      }
    }));

    this.drawPins(this.props.pins);
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
    let addLocation = '';

    if (this.state.currentPin) {
      addLocation = <AddLocation
        lng={this.state.currentPin.lng}
        lat={this.state.currentPin.lat} />;
    }

    return (
      <div>
        <div className="map" ref="gmap"></div>
        {addLocation}
      </div>
    );
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
