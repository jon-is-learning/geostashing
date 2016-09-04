import React from 'react';

const CurrentLocation = () => (
  <div>
    <button onClick ={ () => {
      navigator.geolocation.getCurrentPosition((pos) => {
        console.log(pos);
        console.log('Longitude: ', pos.coords.longitude);
        console.log('Latitude: ', pos.coords.latitude);
      });
    }}>Send Location</button>
  </div>
);

export default CurrentLocation;
