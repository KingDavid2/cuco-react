import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import store from '../store';
import CartItem from './CartItem';
import Grid from '@material-ui/core/Grid';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import CurrencyFormat from 'react-currency-format';


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
  },
  total: {
    paddingTop: '10%'
  }
});

class Checkout extends Component {
  constructor(){
    super();

    this.state = {
      cart: [],
      total: 0
    }

    this.removeFromCart = this.removeFromCart.bind(this)
  }

  componentDidMount(){
    // this.unsubscribe = store.subscribe(() => {
      this.setState({
        cart: store.getState().cart,
        total: store.getState().total
      });
    // });
  }
  componentDidUpdate(){
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
      cart: store.getState().cart,
      total: store.getState().total      
    });
  }

  render() {
    return (
      <div className="" style={{ padding: 10 }}>
      <Typography variant="h5" gutterBottom>
        Cart
      </Typography>
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
                (<CartItem
                  item = {item}
                  removeFromCart = {this.removeFromCart}
                  />)
              )}
          </Grid>
          <Grid container
            className=''
            direction="rtl"
            xs={8}
            style={{ paddingTop: '10px', textAlign:'right', fontSize:14, }}
            >
            <Grid item xs>
              <Typography variant="Subheading" gutterBottom>
              Total:
              </Typography>         
            </Grid>

            <Grid item xs={1}>
              <Typography variant="Subheading" gutterBottom>
              <b>
              <CurrencyFormat
                      value={this.state.total}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$ '} />
              </b>
              </Typography>         
            </Grid>
            </Grid>
        </Grid>

      </div>
    );
  }
}

export default withStyles(styles)(Checkout);
