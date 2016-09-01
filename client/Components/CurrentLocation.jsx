import React from 'react';

var CurrentLocation = (props) => {
  return (
    <div>
      <button onClick ={()=>{
        navigator.geolocation.getCurrentPosition((pos) => {
          console.log(pos);
          console.log('Longitude: ', pos.coords.longitude);
          console.log('Latitude: ', pos.coords.latitude);
        });
      }}>Send Location</button>
    </div>
  );
};

export default CurrentLocation;