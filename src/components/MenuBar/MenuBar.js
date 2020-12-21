import React from 'react';

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
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
