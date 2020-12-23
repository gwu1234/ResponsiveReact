import React from 'react';

import Toolbar from './Toolbar/Toolbar';
import MenuBar from './MenuBar/MenuBar';
import './products.css';


const ProductDetail = ({match}) => {

    return (
      <div style={{height: '100%'}}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <MenuBar show={false} />
          
          
          <div style={{width:"100%", fontSize:"20px", marginTop:"280px", textAlign:"center"}}>     
                 {"productId = " + match.params.productId || 'productId'} 
          </div>       
      </div>
    );
}

export default ProductDetail;

