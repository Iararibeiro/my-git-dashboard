import React from 'react';
import icon from '../img/icon.svg';

import { Link, Route } from 'react-router-dom';

class Header extends React.Component {
  render() {
    const selectedStyle = {
      backgroundColor: '#031136'
    }
    return (
        <div>
        <nav className="App-header">
          <ul className="Header-links">
            <li className="App-name">
              <Link to={'/'} className="Nav-link" activeStyle={selectedStyle}>
                <img src={icon} alt="the icon symbol"/> Home
              </Link>
            </li>
            <li className="About">
              <Link to={'/about'} className="Nav-link" activeStyle={selectedStyle}>
                About
              </Link>
            </li>
          </ul>
        </nav>
        </div>
    );
  }
}

export default Header;
