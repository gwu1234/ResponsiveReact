import React from 'react';

import Toolbar from './Toolbar/Toolbar';
import MenuBar from './MenuBar/MenuBar';
import Backdrop from './Backdrop/Backdrop';
import './productDetail.css';


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
               
          <div class="productdetail-container-3">     
                <div>    
                     {"productId = " + match.params.productId || 'productId'} 
                </div>   
                <div>    
                     {"product name and description"}
                </div>   
                <div>    
                     product photo
                </div>   
          </div>   
          <div class="productdetail-container-2">     
                <div>    
                     {"productId = " + match.params.productId || 'productId'} 
                </div>   
                <div>    
                     {"product name and description"}
                </div>   
                <div>    
                     product photo
                </div>   
          </div>     

      </div>
    );
}

export default ProductDetail;

