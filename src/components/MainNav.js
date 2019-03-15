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

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
});

class MainNav extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position = 'static'>
        <Toolbar>
          <Typography variant = 'title' color='inherit'>
            Cuco
          </Typography>
          <div className={classes.grow} />
          <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(MainNav);
