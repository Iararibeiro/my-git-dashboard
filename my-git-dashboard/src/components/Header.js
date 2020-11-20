import React from 'react';
import iconPink from '../img/icon-pink.svg';

import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
        <div>
        <nav className="App-header">
          <ul className="Header-links">
            <li className="App-name">
              <NavLink to={'/'} className="Nav-link">
                <img src={iconPink} alt="the icon symbol"/> Home
              </NavLink>
            </li>
          </ul>
        </nav>
        </div>
    );
  }
}

export default Header;
