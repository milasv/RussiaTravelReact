import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

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
        <div className="regions">
          <h1>All Regions</h1>
          <Gallery regions={ this.state.regions}/>
        </div>
      );

  }
};

class Gallery extends Component {
  render() {
    return (
      <div className="regions">
      <h2>Regions</h2>
        <table className="regiontable">
        <thead>
        <tr>
          <th>Name</th>
          <th>About</th>
          <th>Image</th>
          <th>Capital</th>

          </tr>
          </thead>

            <tbody>
{this.props.regions.map((f) =>
  <tr key={f.id}>
    <td>{f.name}</td>
    <td>{f.about}</td>
    <td ><img src={f.image}/></td>
    <td >{f.capital}</td>

  </tr>)}
  </tbody>
</table>
      </div>

    );
  }
}


export default Regions;
