import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
//import { Link } from 'react-router-dom';

const SERVER_URL = 'https://http://localhost:3000/activities';

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
        <div className="activities">
          <Navbar />
          <h1>All Activities</h1>
          <Gallery activities={ this.state.activities}/>
        </div>
      );

  }
};

class Gallery extends Component {
  render() {
    return (
      <div className="activities">
      <h2>Activities</h2>
        <table className="locationtable">
        <thead>
        <tr>
          <th>Name</th>
          <th>About</th>
          <th>Image</th>

          </tr>
          </thead>

            <tbody>
{this.props.activities.map((f) =>
  <tr key={f.id}>
    <td>{f.name}</td>
    <td>{f.about}</td>
    <td >{f.image}</td>

  </tr>)}
  </tbody>
</table>
      </div>

    );
  }
}


export default Activities;
