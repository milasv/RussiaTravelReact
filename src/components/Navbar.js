import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <Link className="navbar-brand" to="/">Russia Travel</Link>
          <div className="navbar-nav">
            <Link to="/activities" className="nav-link">Activities</Link>
          </div>
          <div className="navbar-nav">
            <Link to="/places" className="nav-link">Places</Link>
          </div>
          <div className="navbar-nav">
            <Link to="/regions" className="nav-link">Regions</Link>
          </div>
          <div className="navbar-nav">
            <Link to="/seasons" className="nav-link">Seasons</Link>
          </div>
          <div id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/Sign_in" className="nav-link">Sign In </Link>
              </li>
              <li className="nav-item">
              <Link to="/Sign_up"className="nav-link">Sign Up </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
