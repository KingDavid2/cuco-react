import React, { Component } from 'react';
import Painting from './Painting';
import Dropdown from './Dropdown';
import APIClient from '../api/client.js'
import StackGrid, { transitions } from "react-stack-grid";

import MaterialIcon, {colorPalette} from 'material-icons-react';
import CurrencyFormat from 'react-currency-format';
import ReactPaginate from 'react-paginate';

import PropTypes from 'prop-types';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Pagination from "material-ui-flat-pagination";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import store from '../store'


const { scaleDown } = transitions;

const themes = createMuiTheme();

class Shop extends Component {

  constructor(props){
      super(props);
      // this.filterSearch = this.filterSearch.bind(this);
      this.addToCart = this.addToCart.bind(this);

      this.state = {
        mainPaintingVisible: true,
          mainPainting: {title:"",
                          artist: {name:""},
                          medium: {name:""},
                          width:"",
                          height:""},
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
          artists: [],
          prices: [],
          mediums: [],
          sizes: [],
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

    fetch('http://localhost:3002/api/v1/shop/random')
        .then(response => response.json())
        .then(response => {
            // console.log(response)
            this.setState({
                mainPainting: response
            })
        })
        .catch(error => console.log(error));

  }

  addToCart(product) {
    store.dispatch({
      type: "ADD_TO_CART",
      product: product
    })
  }

  // filterSearch(title, selected){
    filterSearch = (title, selected) => {

    console.log(selected);

    this.setState({
      paintings: [],
    });

    // console.log('http://localhost:3002/api/v1/shop?' + title + '_ids=' + selected);
    console.log(title);
    fetch('http://localhost:3002/api/v1/shop?'+ title +'='+ selected)
        .then(response => response.json())
        .then(response => {
            this.setState({

                paintings: response.paintings,
                meta: response.meta
            })
        })
        .catch(error => console.log(error));
    // this.grid.updateLayout();
  }

  selectMainPainting(id){
    fetch('http://localhost:3002/api/v1/paintings/'+id)
        .then(response => response.json())
        .then(response => {
            this.setState({
                mainPainting: response
            })
        })
        .catch(error => console.log(error));
  }

  componentDidUpdate() {
    // this.grid.updateLayout();
  }

  componentWillUpdate() {
    // this.grid.updateLayout();
  }


    handlePageClick = (offset, page) => {
      let selected = page;
      console.log(selected);
      this.setState({
        paintings: [],
      });

      // console.log('http://localhost:3002/api/v1/shop?' + title + '_ids=' + selected);
      fetch('http://localhost:3002/api/v1/shop?page='+ (selected))
          .then(response => response.json())
          .then(response => {
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
          <div className="">
          <Grid container justify='center'>
            <Grid container
              className={classes.dropDownContainer}
              spacing={16}
              direction="row"
              alignItems="center"
              justify="center">
              <Grid item xs>
                  <Dropdown
                    options={artists}
                    title='Artists'
                    filterSearch={this.filterSearch}
                    />
              </Grid>
              <Grid item xs>
                  <Dropdown
                    options={prices}
                    title='Prices'
                    filterSearch={this.filterSearch}/>
              </Grid>
              <Grid item xs>
                  <Dropdown
                    options={mediums}
                    title='Mediums'
                    filterSearch={this.filterSearch}/>
              </Grid>
              <Grid item xs>
                <Dropdown
                  options={sizes}
                  title='Sizes'
                  filterSearch={this.filterSearch}/>
              </Grid>
            </Grid>
          </Grid>

          <Grid container justify='center'
            className={classes.paginationContainer}
                        >
            <MuiThemeProvider theme={themes}>
              <CssBaseline />
              <Pagination
                limit={26}
                offset={this.state.meta.offset}
                total={this.state.meta.total_items}
                onClick={(e, offset, page) => this.handlePageClick(offset, page)}
              />
            </MuiThemeProvider>
          </Grid>

          

            <div className="row">
              <div className="col s4 stack-grid">
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
                  .filter((i, index) => (index < paintings.length/2))
                  .map(painting =>
                   (
                   <div 
                         key={painting.id}
                         onClick={() => this.selectMainPainting(painting.id)}>
                         
                       <img alt={painting.title} src={painting.url} target="_blank" alt={painting.id}/>
                     
                     </div>
                     )
                 )}
              </StackGrid>
              </div>
              <div className='col s4'>
              <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>

              
                <div className="main-pic" key={mainPainting.id}>
                  <div className="card">
                    <div className="well">
                      <div className="card-image">
                        <img alt={mainPainting.title} src={mainPainting.url} target="_blank" />
                          <div data-id= {mainPainting.id}
                             className="add_to_cart btn-floating halfway-fab waves-effect waves-light red"
                             onClick={() => this.addToCart(mainPainting)}>
                            <MaterialIcon icon="add_shopping_cart" color='#FAFAFA'/>
                          </div>
                      </div>
                      <div className="card-content">
                      <div className="card-details">
                        <div className="card-title">
                          {mainPainting.title}
                        </div>
                        <div className="card-artist">
                          {mainPainting.artist.name}
                        </div>

                          <div className="card-medium">
                            {mainPainting.medium.name}
                          </div>
                          <div className="card-dimension">
                            {mainPainting.weight} x {mainPainting.height}
                          </div>
                          <div className="main-pic-price">
                            <CurrencyFormat
                              value={mainPainting.price}
                              displayType={'text'}
                              thousandSeparator={true}
                              prefix={'$ '} />

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              
              </ReactCSSTransitionGroup>
              </div>

              <div className="col s4 stack-grid">
              <StackGrid
                gridRef={grid => this.state.grid[1] = grid}
                appear={scaleDown.appear}
                appeared={scaleDown.appeared}
                enter={scaleDown.enter}
                entered={scaleDown.entered}
                leaved={scaleDown.leaved}
                gutterWidth={20}
                gutterHeight={15}
                columnWidth={180}
                monitorImagesLoaded={true}
              >
              {paintings
                .filter((i, index) => (index < paintings.length/2))
                .map(painting =>
                 (<div
                       key={painting.id}
                       onClick={() => this.selectMainPainting(painting.id)}>
                     <img alt={painting.title} src={painting.url} target="_blank" alt={painting.id}/>
                   </div>)
               )}
              </StackGrid>
              </div>
            </div>
          </div>


      )
    }
}

const styles = theme => ({
  dropDownContainer: {
    height: 100,
    [theme.breakpoints.up("lg")]: {
      width: 1170
    }
  },
  paginationContainer:{
    height: 50
  }
});

Shop.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Shop);
