import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props){
      super(props)
      this.state = {
          value: []
      }
  }
  componentDidMount() {

  }
  componentDidUpdate(){

  }

  changeFilter = (event) => {

  }

  render() {
    return (
      <div className="">
        <div className="input-field">
         <select multiple ref="dropdown" onChange={this.changeFilter}>
           <option value="" disabled>Choose your option</option>
           {this.props.options.map( option => {
               return (
                 <option value={option.id} key={option.id}>{option.name}</option>
               )
           })}
         </select>
         <label>{this.props.title}</label>
       </div>
      </div>
    );
  }
}

export default Dropdown;
