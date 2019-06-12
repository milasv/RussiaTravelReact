import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


const MapConfig = withScriptjs(withGoogleMap((props) => {

  const handleClick = (id) => (e) => {
    props.history.push(`/places/${id}`)
  }

  return (
    <GoogleMap
    defaultZoom={3}
    defaultCenter={{lat: 60.5, lng: 93.283517 }}
    clickableIcons={true}>
    {props.items.map(item =>(
      <Marker
        onClick={(e) => handleClick(item.id)(e)} key={item.name} position={{lat: item.lat, lng: item.lng}}
      />
    ))}

    </GoogleMap>
);
})
)

// class Maps extends Component {
//   render() {
//     return (
//       <GoogleMap
//       defaultZoom={3}
//       defaultCenter={{lat: 60.5, lng: 93.283517 }}
//       clickableIcons={true}>
//       //{this.props.items.map((p) =>(
//       //{}
//         // <Marker lat={46.5} lng={-52} />
//       //))}
//
//       </GoogleMap>
//  );
// }
// }

export default MapConfig
