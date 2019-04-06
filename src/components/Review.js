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

class Review extends Component {
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
        <Typography variant="headline" gutterBottom>
          Review
        </Typography>

        <Grid
        container
        spacing={24}
        justify='center'
        >
        <Grid item xs={2}>
          <Typography variant="subheading" gutterBottom>
           First name:
          </Typography>         
         </Grid>

         <Grid item xs>
          <Typography variant="subheading" gutterBottom>
           <b>{values.first_name}</b>
          </Typography>         
         </Grid>

         <Grid item xs={2}>
          <Typography variant="subheading" gutterBottom>
           Last name:
          </Typography>         
         </Grid>

         <Grid item xs>
          <Typography variant="subheading" gutterBottom>
           <b>{values.last_name}</b>
          </Typography>         
         </Grid>
        </Grid>



        <Grid
        container
        spacing={24}
        justify='center'
        >
        <Grid item xs={2}>
          <Typography variant="subheading" gutterBottom>
          Address 1:
          </Typography>         
         </Grid>

         <Grid item xs>
          <Typography variant="subheading" gutterBottom>
            <b>
            {values.address1}
            </b>
          </Typography>
         </Grid>

         <Grid item xs={2}>
          <Typography variant="subheading" gutterBottom>
           Address 2:
          </Typography>         
         </Grid>

         <Grid item xs>
          <Typography variant="subheading" gutterBottom>
          <b>
            {values.address2}
          </b>
          </Typography>
         </Grid>
        </Grid>

        <Grid
        container
        spacing={24}
        justify='center'
        >
        <Grid item xs={2}>
          <Typography variant="subheading" gutterBottom>
          Country:
          </Typography>         
         </Grid>

         <Grid item xs>
          <Typography variant="subheading" gutterBottom>
            <b>
            {values.country}
            </b>
          </Typography>
         </Grid>

         <Grid item xs={2}>
          <Typography variant="subheading" gutterBottom>
           State:
          </Typography>         
         </Grid>

         <Grid item xs>
          <Typography variant="subheading" gutterBottom>
            <b>
            {values.state}
            </b>
          </Typography>
         </Grid>
        </Grid>

        <Grid
        container
        spacing={24}
        justify='center'
        >
        <Grid item xs={2}>
          <Typography variant="subheading" gutterBottom>
          City:
          </Typography>         
         </Grid>

         <Grid item xs>
          <Typography variant="subheading" gutterBottom>
            <b>
            {values.city}
            </b>
          </Typography>
         </Grid>

         <Grid item xs={2}>
          <Typography variant="subheading" gutterBottom>
           Postal Code:
          </Typography>         
         </Grid>

         <Grid item xs>
          <Typography variant="subheading" gutterBottom>
            <b>
            {values.postal_code}
            </b>       
          </Typography>
         </Grid>
        </Grid>


        <Grid
        container
        spacing={24}
        justify='center'
        >
        <Grid item xs={2}>
          <Typography variant="subheading" gutterBottom>
          Phone:
          </Typography>         
         </Grid>

         <Grid item xs>
          <Typography variant="subheading" gutterBottom>
            <b>
            {values.phone}
            </b>
          </Typography>
         </Grid>

         <Grid item xs={2}>
          <Typography variant="subheading" gutterBottom>
           Email:
          </Typography>         
         </Grid>

         <Grid item xs>
          <Typography variant="subheading" gutterBottom>
            <b>
            {values.email}
            </b>
          </Typography>
         </Grid>
        </Grid>

        <Grid
        container
        spacing={24}
        justify='center'
        >
















        </Grid>

      </div>
    );
  }
}

  
export default withStyles(styles)(Review);
