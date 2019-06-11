import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <div className="places">
          <h1>All Places</h1>
          <Gallery places={ this.state.places}/>
        </div>
      );

  }
};

class Gallery extends Component {
  render() {
    return (
      <div className="places">
      <h2>Places</h2>
        <table className="placetable">
        <thead>
        <tr>
          <th>Name</th>
          <th>About</th>
          <th>Image</th>
          <th>Distance from Moscow</th>
          <th>Average winter temperature (low/high)</th>
          <th>Average summer temperature (low/high)</th>
          <th>Avarage annual rainfall</th>

          </tr>
          </thead>

            <tbody>
{this.props.places.map((f) =>
  <tr key={f.id}>
    <td>{f.name}</td>
    <td>{f.about}</td>
    <td ><img src={f.image}/></td>
    <td >{f.distance_from_moscow}</td>
    <td >{f.avg_winter_temp}</td>
    <td >{f.avg_summer_temp}</td>
    <td >{f.avg_rainfall}</td>

  </tr>)}
  </tbody>
</table>
      </div>

    );
  }
}


export default Places;
