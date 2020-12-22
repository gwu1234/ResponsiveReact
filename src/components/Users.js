import React, { Component } from 'react';

import Toolbar from './Toolbar/Toolbar';
import MenuBar from './MenuBar/MenuBar';
import Backdrop from './Backdrop/Backdrop';
import './users.css';


class Users extends Component {
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
          <div class="user-container-3">     
              <div class="user-row">   
                 <div class="user-item">user u1 name</div>
                 <div class="user-item">user u1 profile </div>
                 <div class="user-item">user u1 contact</div>   
              </div>       
              <div class="user-row">   
                 <div class="user-item">user u2 name</div>
                 <div class="user-item">user u2 profile </div>
                 <div class="user-item">user u2 contact</div>   
              </div>    
              <div class="user-row">   
                 <div class="user-item">user u3 name</div>
                 <div class="user-item">user u3 profile </div>
                 <div class="user-item">user u3 contact</div>   
              </div>    
              <div class="user-row">   
                 <div class="user-item">user u4 name</div>
                 <div class="user-item">user u4 profile </div>
                 <div class="user-item">user u4 contact</div>   
              </div>      
              <div class="user-row">   
                 <div class="user-item">user u5 name</div>
                 <div class="user-item">user u5 profile </div>
                 <div class="user-item">user u5 contact</div>   
              </div>    
              <div class="user-row">   
                 <div class="user-item">user u6 name</div>
                 <div class="user-item">user u6 profile </div>
                 <div class="user-item">user u6 contact</div>   
              </div>    
              <div class="user-row">   
                 <div class="user-item">user u7 name</div>
                 <div class="user-item">user u7 profile </div>
                 <div class="user-item">user u7 contact</div>   
              </div>  
              <div class="user-row">   
                 <div class="user-item">user u8 name</div>
                 <div class="user-item">user u8 profile </div>
                 <div class="user-item">user u8 contact</div>   
              </div>    
              <div class="user-row">   
                 <div class="user-item">user u9 name</div>
                 <div class="user-item">user u9 profile </div>
                 <div class="user-item">user u9 contact</div>   
              </div>      
          </div>  
          <div class="user-container-2">     
              <div class="user-row">   
                 <div class="user-item">user B1 name</div>
                 <div class="user-item">user B1 profile </div>
                 <div class="user-item">user B1 contact</div>   
              </div>       
              <div class="user-row">   
                 <div class="user-item">user B2 name</div>
                 <div class="user-item">user B2 profile </div>
                 <div class="user-item">user B2 contact</div>   
              </div>    
              <div class="user-row">   
                 <div class="user-item">user B3 name</div>
                 <div class="user-item">user B3 profile </div>
                 <div class="user-item">user B3 contact</div>   
              </div>    
              <div class="user-row">   
                 <div class="user-item">user B4 name</div>
                 <div class="user-item">user B4 profile </div>
                 <div class="user-item">user B4 contact</div>   
              </div>      
              <div class="user-row">   
                 <div class="user-item">user B5 name</div>
                 <div class="user-item">user B5 profile </div>
                 <div class="user-item">user B5 contact</div>   
              </div>    
              <div class="user-row">   
                 <div class="user-item">user B6 name</div>
                 <div class="user-item">user B6 profile </div>
                 <div class="user-item">user B6 contact</div>   
              </div>    
              <div class="user-row">   
                 <div class="user-item">user B7 name</div>
                 <div class="user-item">user B7 profile </div>
                 <div class="user-item">user B7 contact</div>   
              </div>  
              <div class="user-row">   
                 <div class="user-item">user B8 name</div>
                 <div class="user-item">user B8 profile </div>
                 <div class="user-item">user B8 contact</div>   
              </div>    
              <div class="user-row">   
                 <div class="user-item">user B9 name</div>
                 <div class="user-item">user B9 profile </div>
                 <div class="user-item">user B9 contact</div>   
              </div>  
              <div class="user-row">   
                 <div class="user-item">user B10 name</div>
                 <div class="user-item">user B10 profile </div>
                 <div class="user-item">user B10 contact</div>   
              </div>     
          </div>       
      </div>
    );
  }
}

export default Users;

