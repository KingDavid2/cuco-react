import React, { Component } from 'react';

import './App.css';
// import 'materialize-css/dist/css/materialize.min.css'

import MainNav from './components/MainNav'
import Shop from './components/Shop';
import Checkout from './components/Checkout';

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

class App extends Component {


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <MainNav />
            <Switch>
              <Route exact path="/" component={Shop} />
              <Route path="/checkout" component={Checkout} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
