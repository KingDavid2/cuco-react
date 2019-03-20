import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

class Dropdown extends Component {
  constructor(props){
      super(props)
      this.state = {
          value: [],
          name: []
      }
  }

  componentDidUpdate(){
    // this.props.filterSearch(this.props.title, this.state.name)
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
    this.props.filterSearch(this.props.title, event.target.value);
  };

  render() {
    return (
      <FormControl 
      fullWidth={true}
      display={'flex'}>
        <InputLabel htmlFor="select-multiple-checkbox">{this.props.title}</InputLabel>
        <Select
          multiple
          value={this.state.name}
          onChange={this.handleChange}
          input={<Input id="select-multiple-checkbox" />}
          renderValue={selected => selected.join(', ')}
        >
          {this.props.options.map(option => (
            <MenuItem key={option.id} value={option.name}>
              <Checkbox checked={this.state.name.indexOf(option.name) > -1} />
              <ListItemText primary={option.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

export default Dropdown;
