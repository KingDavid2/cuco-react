import React, { Component } from 'react';

import './App.css';
import MainNav from './components/MainNav'
import Shop from './components/Shop';
import Checkout from './components/Checkout';
import Success from './components/Success';
import Front from './components/Front';

import MaterialIcon, {colorPalette} from 'material-icons-react';
import CssBaseline from '@material-ui/core/CssBaseline';


import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

class App extends Component {

  constructor(props){
      super(props);
  }

  render() {
    return (
      <div className="App">
      <CssBaseline />
        <BrowserRouter>
          <div>
            <MainNav />
            <Switch>
              <Route exact path="/" component={Shop} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/success" component={Success} />
              <Route path="/front" component={Front} />

            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
