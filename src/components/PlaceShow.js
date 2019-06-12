import React, { Component } from "react";
import axios from 'axios';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import SeasonShow from './SeasonShow'

class PlaceShow extends Component {

  state = {
    place: []
  }

  componentDidMount () {
    const {id} = this.props.match.params

    let places;

    if (this.props.location.state) {
      places = this.props.location.state.places
    }



    if (!places) {
      axios.get(`http://localhost:3000/places/${id}.json`).then((results) => {
        console.log(results.data);
        this.setState({place: results.data});
      });
    } else {
      this.setState({place: places})
    }

  }

  render() {

    if (!this.state.place) {
      return (
        <div>Loading...</div>
      )
    }

    return (
        <div className="container" >
        <Navbar />

          <ul key={this.state.place.id}>

          <li>{this.state.place.name}</li>

          <div class="gallery">
          <li ><img src={this.state.place.image}/></li>
          </div>

          <li>About: {this.state.place.about}</li>

          <li >Distance from Moscow: {this.state.place.distance_from_moscow}</li>

          <li >Average winter temperature (low/high): {this.state.place.avg_winter_temp}</li>

          <li >Average summer temperature (low/high): {this.state.place.avg_summer_temp}</li>

          <li >Avarage annual rainfall: {this.state.place.avg_rainfall}</li>

          <li >Latitude: {this.state.place.lat}</li>

          <li >Longitude: {this.state.place.lng}</li>

        
          </ul>)


          </div>
    );
  }
}

export default PlaceShow;
