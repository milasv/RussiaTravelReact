import React, { Component } from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import Places from './Places'
import axios from 'axios';
import MapConfig from './MapConfig';

const SERVER_URL = 'http://localhost:3000/places.json';

// class Pl extends Component {
//   constructor() {
//     super();
//     this.state = {
//       places: []
//     };
//
//     const fetchPl = () => {
//       axios.get(SERVER_URL).then((results) => {
//         console.log(results.data);
//         this.setState({places: results.data});
//       });
//     };
//     fetchPl();
//   }
//
//   render () {
//
//       return (
//         <div Maps="maps">
//             Hello
//         </div>
//       );
//
//   }
// };


class HomeMap extends Component {
  render() {
    return (
     <div className="container" style={{width: "100vw", height: "60vh"}}>
       <MapConfig
       history={this.props.history}
       items={this.props.items}
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
