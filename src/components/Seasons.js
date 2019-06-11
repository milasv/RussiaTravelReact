import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SERVER_URL = 'http://localhost:3000/seasons.json';

class Seasons extends Component {
  constructor() {
    super();
    this.state = {
      seasons: []
    };

    const fetchSeasons = () => {
      axios.get(SERVER_URL).then((results) => {
        console.log(results.data);
        this.setState({seasons: results.data});
      });
    };
    fetchSeasons();
  }

  render () {

      return (
        <div className="seasons">
          <h1>All Seasons</h1>
          <Gallery seasons={ this.state.seasons}/>
        </div>
      );

  }
};

class Gallery extends Component {
  render() {
    return (
      <div className="seasons">
      <h2>Seasons</h2>
        <table className="seasontable">
        <thead>
        <tr>
          <th>Name</th>
          <th>About</th>
          <th>Image</th>
          <th>Time</th>

          </tr>
          </thead>

            <tbody>
{this.props.seasons.map((f) =>
  <tr key={f.id}>
    <td>{f.name}</td>
    <td>{f.about}</td>
    <td ><img src={f.image}/></td>
    <td >{f.time}</td>

  </tr>)}
  </tbody>
</table>
      </div>

    );
  }
}


export default Seasons;
