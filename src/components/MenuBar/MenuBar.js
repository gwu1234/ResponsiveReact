import React from 'react';
import { Link} from 'react-router-dom'
import './MenuBar.css';

const MenuBar = props => {
  let drawerClasses = 'menu-bar';
  if (props.show) {
    drawerClasses = 'menu-bar open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
            <Link to="/company">Company</Link>
        </li>
        <li>
            <Link to="/products">Products</Link>
        </li>
        <li>
            <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
