import React, { Component } from 'react';

class MainNav extends Component {

  render() {
    return (
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html">cosa 1</a></li>
              <li><a href="badges.html">cosa 2</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default MainNav;
