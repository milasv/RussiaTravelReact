import React, { Component } from 'react';
import '../App.css';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HomeMap from './HomeMap'

class Home extends Component {
  constructor () {
    super();

    this.state = {
      places: []
    }
  }

  componentDidMount () {
    const URL = "http://localhost:3000/places.json"

    axios.get(URL)
    .then(response => {
      console.log(response.data);
      this.setState({places: response.data})
    })
    .catch(console.warn)

  }

  render() {
    return (
      <div className="container">
        <Navbar />

        <div className="jumbotron">
          <h1 className="display-4"> Why Russia? </h1>
          <p className="lead"> We are the best country in the world. Hang out with our bears and be happy! </p>
          <hr className="my-4"></hr>
          {this.state.places.length > 0 && <HomeMap history={this.props.history} items={this.state.places} />}
          <p>Where do you want to go?</p>
          <Link className="btn btn-info btn-lg" to="/search" role="button">Search</Link>
        </div>


      </div>
    );
  }
}


export default Home;
