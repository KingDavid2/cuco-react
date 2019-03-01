import React, { Component } from 'react';
// import axios from 'axios';
import Painting from './Painting';
import APIClient from '../api/client.js'
import StackGrid, { transitions } from "react-stack-grid";

const { scaleDown } = transitions;

class ShopContainer extends Component {

  constructor(props){
      super(props)
      this.state = {
          paintings: []
      }
  }

  componentDidMount() {
        // axios.get('http://localhost:3001/api/v1/paintings.json', { crossdomain: true })
        // .then(response => {
        //     console.log(response)
        //     this.setState({
        //         paintings: response.data
        //     })
        // })
        // .catch(error => console.log(error))
        fetch('http://localhost:3002/api/v1/paintings')
            .then(response => response.json())
            .then(response => {
                console.log(response)
                this.setState({
                    paintings: response
                })
            })
            .catch(error => console.log(error))

    }

    render() {
      return (
          // <div className="paintings-container">
          //     {this.state.paintings.map( painting => {
          //         return (
          //           <Painting painting={painting} key={painting.id} />
          //         )
          //     })}
          // </div>

          <div className="">
            <div className="row">
              <div className="col s4">
              <StackGrid
              appear={scaleDown.appear}
              appeared={scaleDown.appeared}
              enter={scaleDown.enter}
              entered={scaleDown.entered}
              leaved={scaleDown.leaved}
              // gutterWidth={5}
              gutterHeight={0}
              columnWidth={180}
              monitorImagesLoaded={true}
              >
                {this.state.paintings.map( painting => {
                    return (
                      <Painting painting={painting} key={painting.id} />
                    )
                })}
              </StackGrid>
              </div>
              <div className="col s4">
              <StackGrid
              appear={scaleDown.appear}
              appeared={scaleDown.appeared}
              enter={scaleDown.enter}
              entered={scaleDown.entered}
              leaved={scaleDown.leaved}
              // gutterWidth={5}
              gutterHeight={0}
              columnWidth={180}
              monitorImagesLoaded={true}
              >
                {this.state.paintings.map( painting => {
                    return (
                      <Painting painting={painting} key={painting.id} />
                    )
                })}
              </StackGrid>
              </div>
              <div className="col s4">
              <StackGrid
              appear={scaleDown.appear}
              appeared={scaleDown.appeared}
              enter={scaleDown.enter}
              entered={scaleDown.entered}
              leaved={scaleDown.leaved}
              // gutterWidth={5}
              gutterHeight={0}
              columnWidth={180}
              monitorImagesLoaded={true}
              >
                {this.state.paintings.map( painting => {
                    return (
                      <Painting painting={painting} key={painting.id} />
                    )
                })}
              </StackGrid>
              </div>
            </div>
          </div>


      )
    }
}

export default ShopContainer;
