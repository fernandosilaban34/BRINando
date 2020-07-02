/** @format */

import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from '../pages/Home';
import Provinsi from '../pages/Provinsi';
import Kontrasepsi from '../pages/Kontrasepsi';
import Pemakai from '../pages/Pemakai';
import TambahData from '../pages/TambahData';

class Routers extends React.Component {
  render() {
      
    return (
      <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/provinsi" component={Provinsi}/>
        <Route path="/kontrasepsi" component={Kontrasepsi}/>
        <Route path="/pemakai" component={Pemakai}/>
        <Route path="/tambah" component={TambahData}/>
      </Router>

    );
  }
}


export default Routers;
