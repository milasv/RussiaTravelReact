import React, { Component } from "react";
import axios from 'axios';
import Navbar from './Navbar';

class SeasonShow extends Component {

  state = {
    season: []
  }

  componentDidMount () {
    const {id} = this.props.match.params

    let seasons;

    if (this.props.location.state) {
      seasons = this.props.location.state.seasons
    }



    if (!seasons) {
      axios.get(`http://localhost:3000/seasons/${id}.json`).then((results) => {
        console.log(results.data);
        this.setState({season: results.data});
      });
    } else {
      this.setState({season: seasons})
    }

  }

  render() {

    if (!this.state.season) {
      return (
        <div>Loading...</div>
      )
    }

    return (
        <div className="container">
        <Navbar />

          <ul key={this.state.season.id}>

          <li>{this.state.season.name}</li>

          <div class="gallery">
          <li ><img src={this.state.season.image}/></li>
          </div>
          <li>{this.state.season.about}</li>

          <li >{this.state.season.time}</li>


          </ul>)


          </div>
    );
  }
}

export default SeasonShow;
