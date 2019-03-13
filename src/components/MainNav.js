import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import MaterialIcon, {colorPalette} from 'material-icons-react';

class MainNav extends Component {

  render() {
    return (
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <NavLink to="/">
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/checkout" className="shopping_cart_with_badge">
                  <i className="material-icons">shopping_cart</i>
                    <span className="new badge red">
                        123
                    </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default MainNav;
