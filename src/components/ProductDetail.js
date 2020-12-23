import React from 'react';

import Toolbar from './Toolbar/Toolbar';
import MenuBar from './MenuBar/MenuBar';
import Backdrop from './Backdrop/Backdrop';
import './products.css';


const ProductDetail = ({match}) => {
    const [menuBarOpen, setMenuBarOpen] = React.useState(false)
    const drawerToggleClickHandler =()=>setMenuBarOpen(!menuBarOpen)
    let backdrop = null;

    if (menuBarOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div style={{height: '100%'}}>
          <Toolbar drawerClickHandler={drawerToggleClickHandler} />
          <MenuBar show={menuBarOpen} />
          {backdrop}
          
          
          <div style={{width:"100%", fontSize:"20px", marginTop:"280px", textAlign:"center"}}>     
                 {"productId = " + match.params.productId || 'productId'} 
          </div>       
      </div>
    );
}

export default ProductDetail;

