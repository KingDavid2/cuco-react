import React, { Component } from 'react';
import './App.css';
// import 'materialize-css/dist/css/materialize.min.css'

import MainNav from './components/MainNav'
import ShopContainer from './components/ShopContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav />
        <ShopContainer />
      </div>
    );
  }
}

export default App;