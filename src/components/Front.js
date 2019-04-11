import React, { Component } from 'react';
import classNames from 'classnames';
import store from '../store';
import CartItem from './CartItem';
import Grid from '@material-ui/core/Grid';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import StackGrid, { transitions } from "react-stack-grid";

import MaterialIcon, {colorPalette} from 'material-icons-react';
import CurrencyFormat from 'react-currency-format';
import ReactPaginate from 'react-paginate';

import PropTypes from 'prop-types';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Pagination from "material-ui-flat-pagination";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Button from '@material-ui/core/Button';

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
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
   
});

const { scaleDown } = transitions;


class Front extends Component {
  constructor(props){
      super(props)
      this.state = {
        paintings: [{
          id: 1,
          title: "",
          url: ""
        }],
        meta: {
          total_items: 1,
          current_page: 1,
          total_pages: 1,
          offset: 0
        },
        grid: []

      }
  }

  componentDidMount() {
    fetch('http://localhost:3002/api/v1/shop')
        .then(response => response.json())
        .then(response => {
            // console.log(response)
            this.setState({
                paintings: response.paintings,
                meta: response.meta
            })
        })
        .catch(error => console.log(error));
  }

  render() {
    const { mainPainting,
      paintings,
      artists,
      prices,
      mediums,
      sizes,
      grid,
      } = this.state;
      const { classes } = this.props;

    return (
      <Grid container
      justify='center'
      style={{ paddingTop: 10 }}
      >
        <Grid item xs={6}
        justify='center'
        >
            <StackGrid
            gridRef={grid => this.state.grid[0] = grid}
            appear={scaleDown.appear}
            appeared={scaleDown.appeared}
            enter={scaleDown.enter}
            entered={scaleDown.entered}
            leaved={scaleDown.leaved}
            gutterWidth={20}
            gutterHeight={15}
            columnWidth={180}
            monitorImagesLoaded={true}
            // duration={200}
          >
            {paintings
              .map(painting =>
                (
                <div 
                      key={painting.id}
                      >
                      
                    <img alt={painting.title} src={painting.url} target="_blank" alt={painting.id}/>
                  
                  </div>
                  )
              )}
          </StackGrid>
        </Grid>
        <Grid item xs={5}
        justify='center'
        >
          <Paper className={classes.root} elevation={1}>
            <Grid container
            spacing={8}
            >
                <Grid item xs={12}
                justify='center'
                >
                  <Typography variant="h5" gutterBottom>
                    Sign up
                  </Typography>
                </Grid>
                <Grid item xs={6}
                justify='center'
                >
                  <TextField
                  required
                  id="standard-required"
                  label="First Name"
                  // onChange={(e) => {this.handleChange(e)}}
                  name='first_name'
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
                  // onChange={(e) => {this.handleChange(e)}}
                  name='last_name'
                  className={classes.textField + ' shipping-text'}
                />
              </Grid>
              <Grid item xs={12}
                justify='center'
                >
                  <TextField
                  required
                  id="standard-required"
                  label="Email"
                  // onChange={(e) => {this.handleChange(e)}}
                  name='email'
                  className={classes.textField + ' shipping-text'}
                />
              </Grid>
              <Grid item xs={6}
                justify='center'
                >
                  <TextField
                  required
                  id="standard-required"
                  label="Password"
                  // onChange={(e) => {this.handleChange(e)}}
                  name='password'
                  className={classes.textField + ' shipping-text'}
                />
              </Grid>
              <Grid item xs={6}
                justify='center'
                >
                  <TextField
                  required
                  id="standard-required"
                  label="Password Confirmation"
                  // onChange={(e) => {this.handleChange(e)}}
                  name='password_confirmation'
                  className={classes.textField + ' shipping-text'}
                />
              </Grid>
              <Grid item xs={2}
                justify='right'
                >
                <Button variant="contained" color="primary" className={classes.button}>
                  Sign up
                </Button>
              </Grid>              
            </Grid>
          </Paper>
        </Grid>
      </Grid>

    );
  }
}

Front.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Front);







