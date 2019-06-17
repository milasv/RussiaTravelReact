import React, { Component } from "react";
import axios from 'axios';
import Navbar from './Navbar';

class RegionShow extends Component {

  state = {
    region: []
  }

  componentDidMount () {
    const {id} = this.props.match.params

    let regions;

    if (this.props.location.state) {
      regions = this.props.location.state.regions
    }



    if (!regions) {
      axios.get(`http://localhost:3000/regions/${id}.json`).then((results) => {
        console.log(results.data);
        this.setState({region: results.data});
      });
    } else {
      this.setState({region: regions})
    }

  }

  render() {

    if (!this.state.region) {
      return (
        <div>Loading...</div>
      )
    }

    return (
        <div className="container" >
        <Navbar />

          <ul key={this.state.region.id}>

          <li>{this.state.region.name}</li>

          <div class="gallery">
          <li ><img src={this.state.region.image}/></li>
          </div>

          <li>{this.state.region.about}</li>

          <li >{this.state.region.capital}</li>


          </ul>


          </div>
    );
  }
}

export default RegionShow;
