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

class Payment extends Component {
  constructor(props){
    super(props);

    this.state = {
        cart: []
      }
  }

  postData(url = '', data = {}) {
    // Default options are marked with *
      return fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
              "Content-Type": "application/json",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer", // no-referrer, *client
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      .then(response => response.json()); // parses JSON response into native Javascript objects 
  }

  componentDidMount(){
      this.setState({
          cart: store.getState().cart
        });

    // fetch('http://localhost:3002/api/v1/checkouts', {
    //     headers: {
    //         'Content-type': 'application/json'
    //     },
    //     method: 'POST',
    //     body: { name: 'Paquito Chocolatero', age: 31 },
    //     }).then(function(data) {
    //         console.log(data);
    // });

    // fetch('http://localhost:3002/api/v1/checkouts', {
    //     headers: { "Content-Type": "application/json; charset=utf-8" }
        
    // })
    // .then(response => response.json())
    // .then(response => {
    //     this.setState({
    //         paintings: response.paintings,
    //         meta: response.meta
    //     })
    // })
    // .catch(error => console.log(error));


    this.postData('http://localhost:3002/api/v1/checkouts', {
        line_items: store.getState().cart.map( (item) => item.id )
    })
    .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
    .catch(error => console.error(error));

  }
  


  render() {
      debugger
    const { classes, values } = this.props;
    
    return (
      
      <div className="" style={{ padding: 10 }}>
        <Typography variant="h5" gutterBottom>
        Payment
        </Typography>
        <Grid container
        justify='center'
        >

        </Grid>

      </div>
    );
  }
}

  
export default withStyles(styles)(Payment);
