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
import Countdown from 'react-countdown-now';

import {
    BrowserRouter,
    Route,
    Switch
  } from "react-router-dom";

  export class Payment extends Component {
    constructor( props ){
      super();
      this.state = {
          cart: [],
          mercado_pago_url: ''
        };

        this.setState({
            cart: store.getState().cart
          });
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


        let data = {
            line_items: store.getState().cart.map( (item) => item.id ),
            shipping_address: store.getState().shipping,
            }

        let promise1 = fetch('http://localhost:3002/api/v1/checkouts', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(response => response.json())
          
        Promise.all([promise1]).then(result => {
          this.setState({
            mercado_pago_url: result[0].url
          })
          console.log(result[0].url)
            window.location = result[0].url;
        });
      }

    render(){
      const Completionist = () => <span>Please Click!</span>;

      const renderer = ({ seconds, completed }) => {
        if (completed) {
          return <Completionist />;
        } else {
          return <span>{seconds}</span>;
        }
      };

      return (
        <section>Redirecting to MercadoPago...
          <Countdown
            date={Date.now() + 5000}
            renderer={renderer}
          />,
          <a href={this.state.mercado_pago_url} >MercadoPago</a>
        </section>
      );
    }
  }
  
  export default Payment;

