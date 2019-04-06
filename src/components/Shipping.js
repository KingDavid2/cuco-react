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
  constructor(props){
    super(props);


    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount(){

  }
  componentDidUpdate(){
  }

  componentWillUnmount(){
  }

  // handleChange = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  //   console.log(event.target.value);
  // };

  handleChange(e){
    // debugger
    this.props.handleChange(e.target.name, e.target.value);
  }

  render() {
    const { classes, values } = this.props;
    
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
              // onChange={(e) => {this.handleChange(e)}}
              onChange={this.handleChange}
              name='first_name'
              defaultValue={values.first_name}
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
              onChange={this.handleChange}
              name='last_name'
              defaultValue={values.last_name}
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
              onChange={this.handleChange}
              name='address1'
              defaultValue={values.address1}
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
              onChange={this.handleChange}
              name='address2'
              defaultValue={values.address2}
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
              onChange={this.handleChange}
              name='country'
              defaultValue={values.country}
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
              onChange={this.handleChange}
              name='city'
              defaultValue={values.city}
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
              onChange={this.handleChange}
              name='state'
              defaultValue={values.state}
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
              onChange={this.handleChange}
              name='postal_code'
              defaultValue={values.postal_code}
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
              onChange={this.handleChange}
              name='phone'
              defaultValue={values.phone}
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
              onChange={this.handleChange}
              name='email'
              defaultValue={values.email}
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
