import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PlaceShow from './PlaceShow'

const SERVER_URL = 'http://localhost:3000/places.json';

class Places extends Component {
  constructor() {
    super();
    this.state = {
      places: []
    };

    const fetchPlaces = () => {
      axios.get(SERVER_URL).then((results) => {
        console.log(results.data);
        this.setState({places: results.data});
      });
    };
    fetchPlaces();
  }

  render () {

      return (
        <div className="container">

          <Gallery places={ this.state.places}/>
        </div>
      );

  }
};

class Gallery extends Component {
  render() {
    return (
      <div className="container">
      <Navbar />
      <h2>Places</h2>

{this.props.places.map((f) =>
  <ul key={f.id}>

    <Link to={{
      pathname: `places/${f.id}`,
      state: {
        places: f
      }
    }}><li>{f.name}</li></Link>

    <div class="gallery">
    <li ><img src={f.image}/></li>
    </div>

    <li>About: {f.about}</li>

    <li >Distance from Moscow: {f.distance_from_moscow}</li>

    <li >Average winter temperature (low/high): {f.avg_winter_temp}</li>

    <li >Average summer temperature (low/high): {f.avg_summer_temp}</li>

    <li >Avarage annual rainfall: {f.avg_rainfall}</li>

    <li >Latitude: {f.lat}</li>

    <li >Longitude: {f.lng}</li>


  </ul>)}

      </div>

    );
  }
}


export default Places;
