import React, { Component } from 'react';

import Toolbar from './Toolbar/Toolbar';
import MenuBar from './MenuBar/MenuBar';
import Backdrop from './Backdrop/Backdrop';

class Home extends Component {
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
        <div style={{marginTop: '64px'}}>
          <p>This is the page content!</p>
        </div>
        
      </div>
    );
  }
}

export default Home;
