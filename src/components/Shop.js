import React, { Component } from 'react';
import Painting from './Painting';
import Dropdown from './Dropdown';
import APIClient from '../api/client.js'
import StackGrid, { transitions } from "react-stack-grid";

import MaterialIcon, {colorPalette} from 'material-icons-react';
import CurrencyFormat from 'react-currency-format';
import ReactPaginate from 'react-paginate';

const { scaleDown } = transitions;

class Shop extends Component {

  constructor(props){
      super(props);
      this.filterSearch = this.filterSearch.bind(this);

      this.state = {
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
                  total_pages: 1
                },
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

  filterSearch(event, title, selected){
    event.preventDefault();
    console.log(selected);

    this.setState({
      paintings: [],
    });

    // console.log('http://localhost:3002/api/v1/shop?' + title + '_ids=' + selected);
    fetch('http://localhost:3002/api/v1/shop?artist_id='+ selected)
        .then(response => response.json())
        .then(response => {
            this.setState({
                paintings: response.paintings
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

    handlePageClick = data => {
      let selected = data.selected;
      console.log(selected+1);

      this.setState({
        paintings: [],
      });

      // console.log('http://localhost:3002/api/v1/shop?' + title + '_ids=' + selected);
      fetch('http://localhost:3002/api/v1/shop?page='+ (selected+1))
          .then(response => response.json())
          .then(response => {
              this.setState({
                  paintings: response.paintings
              })
          })
          .catch(error => console.log(error));

      // fetch('http://localhost:3002/api/v1/shop/random')
      //     .then(response => response.json())
      //     .then(response => {
      //         // console.log(response)
      //         this.setState({
      //             mainPainting: response
      //         })
      //     })
      //     .catch(error => console.log(error));


      // let offset = Math.ceil(selected * this.props.perPage);
      //
      // this.setState({ offset: offset }, () => {
      //   this.loadCommentsFromServer();
      // });
    }

    render() {
      const { mainPainting,
              paintings,
              artists,
              prices,
              mediums,
              sizes,
              } = this.state;

      return (
          <div className="">
            <div className="container">

              <div className="row padding-top-15">
                <div className="col s3">
                  <Dropdown
                    options={artists}
                    title='Artists'
                    filterSearch={this.filterSearch}/>
                </div>
                <div className="col s3">
                  <Dropdown
                    options={prices}
                    title='Prices'
                    filterSearch={this.filterSearch}/>
                </div>
                <div className="col s3">
                  <Dropdown
                    options={mediums}
                    title='Mediums'
                    filterSearch={this.filterSearch}/>
                </div>
                <div className="col s3">
                  <Dropdown
                    options={sizes}
                    title='Sizes'
                    filterSearch={this.filterSearch}/>
                </div>
              </div>
            </div>

            <div className="row center">
              <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={this.state.meta.total_pages}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                onPageChange={this.handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
              />
            </div>


            <div className="row">
              <div className="col s4 stack-grid">
              <StackGrid
                gridRef={grid => this.grid = grid}
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

              <div className="col s4">
                <div className="main-pic" key={mainPainting.id}>
                  <div className="card">
                    <div className="well">
                      <div className="card-image">
                        <img alt={mainPainting.title} src={mainPainting.url} target="_blank" />
                          <div data-id= {mainPainting.id}
                             className="add_to_cart btn-floating halfway-fab waves-effect waves-light red"
                             onClick={() => this.addToCheckout(mainPainting)}>
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
                              prefix={'$'} />

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col s4 stack-grid">
              <StackGrid
                gridRef={grid => this.grid = grid}
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

export default Shop;
