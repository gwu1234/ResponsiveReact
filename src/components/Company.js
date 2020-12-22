import React, { Component } from 'react';

import Toolbar from './Toolbar/Toolbar';
import MenuBar from './MenuBar/MenuBar';
import Backdrop from './Backdrop/Backdrop';
import './company.css';


class Company extends Component {
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
          <div class="company-container-l">
                <div class="item1">Company Logo and Name</div>
                <div class="item2">Profile and Introduction</div>
                <div class="item3">Management Team</div>  
                <div class="item4">Products</div>
                <div class="item5">News and Contact</div>
          </div>
          <div class="company-container-s">          
                <div class="item1">Company Logo and Name</div>
                <div class="item2">Profile and Introduction</div>
                <div class="item3">Management Team</div>  
                <div class="item4">Products</div>
                <div class="item5">News and Contact</div>
          </div>          
      </div>
    );
  }
}

export default Company;

