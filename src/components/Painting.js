import React, { Component } from 'react';

class Painting extends Component {
  constructor(props){
      super(props)
      this.state = {
        painting: {}
      }
  }
  selectPainting = (event) => {
    this.props.changeMainPicture(event, this.state.painting.id);
  }

  render() {
    return (
      <div
          key={this.state.painting.id}
          onClick={() => this.selectPainting}>
        <img alt={this.state.painting.title} src={this.state.painting.url} target="_blank" alt = {this.state.painting.id}/>
      </div>
    );
  }
}


export default Painting;
