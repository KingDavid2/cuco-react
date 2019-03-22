import React, { Component } from 'react';
import store from '../store';

class Checkout extends Component {
  constructor(){
    super();

    this.state = {
      cart: []
    }

    store.subscribe(() => {
      this.setState({
        cart: store.getState().cart
      })
    });
  }

  render() {
    return (
      <div className="">


      </div>
    );
  }
}

export default Checkout;
