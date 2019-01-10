import React from 'react';
import icon from '../img/icon.svg';

class Header extends React.Component {
  render() {
    return (
      <div className="App-header">
        <ul>
          <li className="App-name"><img src={icon} /> My Git Dashboard</li>
          <li className="About"><a>About</a></li>
        </ul>
      </div>
    );
  }
}

export default Header;
