import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RegionShow from './RegionShow'

const SERVER_URL = 'http://localhost:3000/regions.json';

class Regions extends Component {
  constructor() {
    super();
    this.state = {
      regions: []
    };

    const fetchRegions = () => {
      axios.get(SERVER_URL).then((results) => {
        console.log(results.data);
        this.setState({regions: results.data});
      });
    };
    fetchRegions();
  }

  render () {

      return (
        <div className="container">

          <Gallery regions={ this.state.regions}/>
        </div>
      );

  }
};

class Gallery extends Component {
  render() {
    return (
      <div className="container">
      <Navbar />
      <h2>Regions</h2>

{this.props.regions.map((f) =>
  <ul key={f.id}>
  <Link to={{
    pathname: `regions/${f.id}`,
    state: {
      regions: f
    }
  }}><li>{f.name}</li></Link>

    <div class="gallery">
    <li class= "image" ><img src={f.image}/></li>
    </div>
    <li>{f.about}</li>
    <li >{f.capital}</li>

  </ul>)}

      </div>

    );
  }
}


export default Regions;
