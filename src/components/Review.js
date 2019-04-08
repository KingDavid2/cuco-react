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
import CurrencyFormat from 'react-currency-format';


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

    this.state = {
      cart: [],
      total: 0
    }

    this.handleChange = this.handleChange.bind(this);
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

        <Typography variant="title" gutterBottom>
          Cart
        </Typography>


        <Grid
        container
        spacing={24}
        justify='center'
        >
        <Grid container
            className=''
            xs={24}
            justify='left'
            style={{ paddingTop: '10px', textAlign:'right', fontSize:14, }}
            >
            <Grid item xs={1}>
              <Typography variant="Subheading" gutterBottom>
              Total:
              </Typography>         
            </Grid>

            <Grid
              item
              xs={1}
              style={{ paddingBottom: '20px'}}
              >
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
        

        <Grid item xs={24}>
          <Typography variant="title" gutterBottom>
            Shipping
          </Typography>
        </Grid>

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
