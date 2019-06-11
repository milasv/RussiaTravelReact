import React, { Component } from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import Places from './Places'

class Maps extends Component {
  render() {
    return (
      <GoogleMap
      defaultZoom={3}
      defaultCenter={{lat: 60.5, lng: 93.283517 }}
      >
      {}
      </GoogleMap>
 )
}
}

const WrappedMap = withScriptjs(withGoogleMap(Maps));


class HomeMap extends Component {
  render() {
    return (
 <div style={{width: "100vw", height: "60vh"}}>
 <WrappedMap
 googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCoftRBCOAjWnVD5sBoWnOxmFDalACcst4`}
 loadingElement={<div style={{ height: "100%" }}/>}
 containerElement={<div style={{ height: "100%" }}/>}
 mapElement={<div style={{ height: "100%" }}/>}
 />
 </div>
 )
}
}


export default HomeMap;
