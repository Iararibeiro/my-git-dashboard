import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import Home from './Home';
import About from './About';
import icon from '../img/icon.svg';

class Header extends React.Component {
  render() {
    const selectedStyle = {
      backgroundColor: '#031136'
    }

    return (
      <Router>
        <div>
        <nav className="App-header">
          <ul className="Header-links">
            <li className="App-name">
              <NavLink to={'/'} className="Nav-link" activeStyle={selectedStyle}>
                <img src={icon} alt="the icon symbol"/> My Git Dashboard
              </NavLink>
            </li>
            <li className="About">
              <NavLink to={'/about'} className="Nav-link" activeStyle={selectedStyle}>
                About
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default Header;
