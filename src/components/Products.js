import React, { Component } from 'react';
import { Link} from 'react-router-dom'

import Toolbar from './Toolbar/Toolbar';
import MenuBar from './MenuBar/MenuBar';
import Backdrop from './Backdrop/Backdrop';
import './products.css';


class Products extends Component {
  state = {
    menuBarOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {menuBarOpen: !prevState.menuBarOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({menuBarOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.menuBarOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{height: '100%'}}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <MenuBar show={this.state.menuBarOpen} />
          {backdrop}
          
          <div class="product-container-3">     
              <div class="product-item"><Link to="/products/A1">A1</Link></div>
              <div class="product-item">A2</div>
              <div class="product-item">A3</div>       
              <div class="product-item">A4</div>
              <div class="product-item">A5</div>
              <div class="product-item">A6</div>  
              <div class="product-item">A7</div>
              <div class="product-item">A8</div>
              <div class="product-item">A9</div>  
          </div>  
          <div class="product-container-2">          
              <div class="product-item"><Link to="/products/B1">B1</Link></div>
              <div class="product-item">B2</div>
              <div class="product-item">B3</div>
              <div class="product-item">B4</div>
              <div class="product-item">B5</div>
              <div class="product-item">B6</div>
              <div class="product-item">B7</div>
              <div class="product-item">B8</div>
              <div class="product-item">B9</div>
              <div class="product-item">B10</div>
          </div>       
      </div>
    );
  }
}

export default Products;

