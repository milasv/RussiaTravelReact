import React from 'react';
import '../App.css';
import Activities from './Activities'
import Places from './Places'
import Seasons from './Seasons'
import Regions from './Regions'
import Navbar from './Navbar'
import Home from './Home'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Maps from './Maps'

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <Activities />
        <Places />
        <Seasons />
        <Regions />
        <Navbar />
        <Home />
        <Maps />
      </div>
    );
  }
}

export default App;
