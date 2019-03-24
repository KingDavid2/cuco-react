import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import store from '../store';
import CheckoutItem from './CheckoutItem'
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  mainContainer: {
    paddingTop: 24,
  }
});

class Checkout extends Component {
  constructor(){
    super();

    this.state = {
      cart: []
    }

    this.removeFromCart = this.removeFromCart.bind(this)
  }

  componentDidMount(){
    // this.unsubscribe = store.subscribe(() => {
      this.setState({
        cart: store.getState().cart
      });
    // });
    // debugger
  }
  componentDidUpdate(){
    // debugger
  }

  componentWillUnmount(){
    // this.unsubscribe();
  }

  removeFromCart(product){
    store.dispatch({
        type: "REMOVE_FROM_CART",
        product: product
    });

    this.setState({
      cart: store.getState().cart
    });
  }

  render() {
    return (
      <div className="" style={{ padding: 54 }}>
        <Grid container
        justify='center'
        >
          <Grid container
            className=''
            direction="column"
            xs={8}
            >
            {this.state.cart
              .map(item =>
                (<CheckoutItem
                  item = {item}
                  removeFromCart = {this.removeFromCart}
                  />)
              )}
          </Grid>
        </Grid>

      </div>
    );
  }
}

export default withStyles(styles)(Checkout);
