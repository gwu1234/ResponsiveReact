import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import MenuBar from './components/MenuBar/MenuBar';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
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
        <main style={{marginTop: '64px'}}>
          <p>This is the page content!</p>
        </main>
        
      </div>
    );
  }
}

export default App;
