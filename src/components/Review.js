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
        <Typography variant="h5" gutterBottom>
          Review
        </Typography>
        <Grid container
        justify='center'
        >
            este es el review
        </Grid>

      </div>
    );
  }
}

  
export default withStyles(styles)(Review);
