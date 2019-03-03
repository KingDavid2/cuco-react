import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'

class Dropdown extends Component {
  constructor(props){
      super(props)
      // this.state = {
      //     title: ''
      // }
  }
  componentDidMount() {

  }
  componentDidUpdate(){
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems);
  }

  render() {
    return (
      <div className="">
        <div className="input-field">
         <select ref="dropdown" defaultValue="1">
           <option value="" disabled>Choose your option</option>
           {this.props.options.map( option => {
               return (
                 <option value='{option.id}' key={option.id}>{option.name}</option>
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
