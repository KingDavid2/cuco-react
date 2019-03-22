import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import store from '../store';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
});

class MainNav extends Component {
  constructor(){
    super();

    this.state = {
      cart: []
    }

    store.subscribe(() => {
      this.setState({
        cart: store.getState().cart
      })
    });
  }
  
  componentDidMount(){

  }
  render() {
    const { classes } = this.props;
    return (
      <AppBar position = 'static'>
        <Toolbar>
          <Typography variant = 'title' color='inherit'>
            <NavLink to = '/'>
                Cuco
            </NavLink>
          </Typography>
          <div className={classes.grow} />
          <IconButton color="inherit">
            <NavLink to = '/checkout'>
              <Badge badgeContent={this.state.cart.length} color="secondary">
                <ShoppingCart />
              </Badge>
            </NavLink>
          </IconButton>           
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(MainNav);
