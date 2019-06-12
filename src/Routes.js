import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Activities from './components/Activities';
import Places from './components/Places';
import Seasons from './components/Seasons';
import Regions from './components/Regions';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import HomeMap from './components/HomeMap';
import PlaceShow from './components/PlaceShow';
import ActivityShow from './components/ActivityShow';
import RegionShow from './components/RegionShow';
import SeasonShow from './components/SeasonShow';


const Routes = (
  <Router>
    <div>

      <Route exact path="/activities" component= {Activities} />
      <Route exact path="/places" component={ Places } />
      <Route exact path="/seasons" component={ Seasons } />
      <Route exact path="/regions" component={ Regions } />
      <Route exact path="/navbar" component={ Navbar } />
      <Route exact path="/home" component={ Home } />
      <Route exact path="/sign_in" component={ SignIn } />
      <Route exact path="/sign_up" component={ SignUp } />
      <Route exact path="/maps" component={ HomeMap } />
      <Route exact path="/places/:id" component={ PlaceShow } />
      <Route exact path="/activities/:id" component={ ActivityShow } />
      <Route exact path="/regions/:id" component={ RegionShow } />
      <Route exact path="/seasons/:id" component={ SeasonShow } />


    </div>
  </Router>
);


export default Routes;
