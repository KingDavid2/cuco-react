import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'
// import axios from 'axios';
import Painting from './Painting';
import Dropdown from './Dropdown';
import APIClient from '../api/client.js'
import StackGrid, { transitions } from "react-stack-grid";

const { scaleDown } = transitions;

class ShopContainer extends Component {

  constructor(props){
      super(props)
      this.state = {
          paintings: [],
          artists: [],
          prices: [],
          mediums: [],
          sizes: []
      }
  }

  componentDidMount() {
    fetch('http://localhost:3002/api/v1/shop')
        .then(response => response.json())
        .then(response => {
            // console.log(response)
            this.setState({
                paintings: response
            })
        })
        .catch(error => console.log(error));

    fetch('http://localhost:3002/api/v1/artists_name')
        .then(response => response.json())
        .then(response => {
            // console.log(response)
            this.setState({
                artists: response
            })
        })
        .catch(error => console.log(error));

    fetch('http://localhost:3002/api/v1/prices_name')
        .then(response => response.json())
        .then(response => {
            // console.log(response)
            this.setState({
                prices: response
            })
        })
        .catch(error => console.log(error));

    fetch('http://localhost:3002/api/v1/mediums_name')
        .then(response => response.json())
        .then(response => {
            // console.log(response)
            this.setState({
                mediums: response
            })
        })
        .catch(error => console.log(error));

    fetch('http://localhost:3002/api/v1/sizes_name')
        .then(response => response.json())
        .then(response => {
            // console.log(response)
            this.setState({
                sizes: response
            })
        })
        .catch(error => console.log(error));


      M.AutoInit();
    }

    render() {
      return (
          <div className="">
            <div className="container">
              <div className="row">
                <div className="col s3">
                  <Dropdown
                    options={this.state.artists}
                    title='Artists'/>
                </div>
                <div className="col s3">
                  <Dropdown
                    options={this.state.prices}
                    title='Prices'/>
                </div>
                <div className="col s3">
                  <Dropdown
                    options={this.state.mediums}
                    title='Mediums'/>
                </div>
                <div className="col s3">
                  <Dropdown
                    options={this.state.sizes}
                    title='Sizes'/>
                </div>
              </div>
            </div>


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
