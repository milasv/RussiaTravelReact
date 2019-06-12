import React, { Component } from "react";
import axios from 'axios';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

class ActivityShow extends Component {

  state = {
    activity: []
  }

  componentDidMount () {
    const {id} = this.props.match.params

    let activities;

    if (this.props.location.state) {
      activities = this.props.location.state.activities
    }



    if (!activities) {
      axios.get(`http://localhost:3000/activities/${id}.json`).then((results) => {
        console.log(results.data);
        this.setState({activity: results.data});
      });
    } else {
      this.setState({activity: activities})
    }

  }

  render() {

    if (!this.state.activity) {
      return (
        <div>Loading...</div>
      )
    }

    return (
        <div className="container" >
        <Navbar />

          <ul key={this.state.activity.id}>

          <li>{this.state.activity.name}</li>

          <div class="gallery">
          <li ><img src={this.state.activity.image}/></li>
          </div>

          <li>About: {this.state.activity.about}</li>
          

          </ul>)

          </div>
    );
  }
}

export default ActivityShow;
