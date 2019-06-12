import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ActivityShow from './ActivityShow'

const SERVER_URL = 'http://localhost:3000/activities.json';

class Activities extends Component {
  constructor() {
    super();
    this.state = {
      activities: []
    };

    const fetchActivities = () => {
      axios.get(SERVER_URL).then((results) => {
        console.log(results.data);
        this.setState({activities: results.data});
      });
    };
    fetchActivities();
  }

  render () {

      return (
        <div className="container">


          <Gallery activities={ this.state.activities}/>
        </div>
      );

  }
};

class Gallery extends Component {
  render() {
    return (
      <div className="container">
      <Navbar />
      <h2>Activities</h2>

{this.props.activities.map((f) =>

  <ul key={f.id}>

  <Link to={{
    pathname: `activities/${f.id}`,
    state: {
      activities: f
    }
  }}><li>{f.name}</li></Link>

    <div class="gallery">
    <li class= "image" ><img src={f.image}/></li>
    </div>

    <li>About: {f.about}</li>

    

  </ul>)}

      </div>

    );
  }
}


export default Activities;
