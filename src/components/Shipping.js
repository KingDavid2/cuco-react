import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import store from '../store';
import CartItem from './CartItem';
import Grid from '@material-ui/core/Grid';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        width:'100%',
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginBottom: '0px',
      },
      dense: {
        marginTop: 19,
      },
      menu: {
        width: 200,
      },
});

class Shipping extends Component {
  constructor(){
    super();

  }

  componentDidMount(){

  }
  componentDidUpdate(){
  }

  componentWillUnmount(){
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };


  render() {
    const { classes } = this.props;

    return (
      <div className="" style={{ padding: 10 }}>
        <Typography variant="h5" gutterBottom>
          Shipping Address
        </Typography>
        <Grid container
        justify='center'
        >
        <form className={''} noValidate autoComplete="off">
        <Grid container
        justify='center'
        spacing={8}
        >
          <Grid item xs={6}
          justify='center'
          >
              <TextField
              required
              id="standard-required"
              label="First Name"
              className={classes.textField + ' shipping-text'}
            />
          </Grid>
          <Grid item xs={6}
          justify='center'
          >
              <TextField
              required
              id="standard-required"
              label="Last Name"
              className={classes.textField + ' shipping-text'}
            />
          </Grid>

          <Grid item xs={12}
          justify='center'
          >
              <TextField
              required
              id="standard-required"
              label="Address"
              className={classes.textField + ' shipping-text'}
            />
          </Grid>
          <Grid item xs={12}
          justify='center'
          >
              <TextField
              required
              id="standard-required"
              label="Address 2"
              className={classes.textField + ' shipping-text'}
            />
          </Grid>

          <Grid item xs={6}
          justify='center'
          >
              <TextField
              required
              id="standard-required"
              label="Country"
              className={classes.textField + ' shipping-text'}
            />
          </Grid>
          <Grid item xs={6}
          justify='center'
          >
              <TextField
              required
              id="standard-required"
              label="City"
              className={classes.textField + ' shipping-text'}
            />
          </Grid>

          <Grid item xs={6}
          justify='center'
          >
              <TextField
              required
              id="standard-required"
              label="State"
              className={classes.textField + ' shipping-text'}
            />
          </Grid>
          <Grid item xs={6}
          justify='center'
          >
              <TextField
              required
              id="standard-required"
              label="Zip / Postal Code"
              className={classes.textField + ' shipping-text'}
            />
          </Grid>

          <Grid item xs={12}
          justify='center'
          >
              <TextField
              required
              id="standard-required"
              label="Phone"
              className={classes.textField + ' shipping-text'}
            />
          </Grid>
          <Grid item xs={12}
          justify='center'
          >
              <TextField
              required
              id="standard-required"
              label="Email Address"
              className={classes.textField + ' shipping-text'}
            />
          </Grid>
        </Grid>  

        </form>
        </Grid>

      </div>
    );
  }
}

Shipping.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Shipping);
