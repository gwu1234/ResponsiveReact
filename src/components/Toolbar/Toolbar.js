import React from 'react';

import DrawerToggleButton from '../MenuBar/DrawerToggleButton';
import { Link} from 'react-router-dom'
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/">GWU</a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li><Link to="/company">Company</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/responsive">Demo</Link></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default toolbar;
