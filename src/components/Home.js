import React, { Component } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Maps from './Maps'

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Maps />
        <div className="jumbotron">
          <h1 className="display-4"> Why Russia? </h1>
          <p className="lead"> We are the best country in the world. Talk with our bears and be happy! </p>
          <hr className="my-4"></hr>
          <p>Where you want to go?</p>
          <Link className="btn btn-info btn-lg" to="/search" role="button">Search</Link>
        </div>

      </div>
    );
  }
}


export default Home;
