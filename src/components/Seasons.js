import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SeasonShow from './SeasonShow'

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
        <div className="container">

          <Gallery seasons={ this.state.seasons}/>
        </div>
      );

  }
};

class Gallery extends Component {
  render() {
    return (
      <div className="container">
      <Navbar />
      <h2>Seasons</h2>

{this.props.seasons.map((f) =>
  <ul key={f.id}>
  <Link to={{
    pathname: `seasons/${f.id}`,
    state: {
      seasons: f
    }
  }}><li>{f.name}</li></Link>
    <div class="gallery">
    <li ><img src={f.image}/></li>
    </div>
    <li>{f.about}</li>
    <li >{f.time}</li>

  </ul>)}

      </div>

    );
  }
}


export default Seasons;
