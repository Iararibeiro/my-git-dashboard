import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import icon from '../img/icon.svg';

class Header extends React.Component {
  render() {
    return (
      <Router>
        <div>
        <nav className="App-header">
          <ul className="Header-links">
            <li className="App-name">
              <Link to={'/'} className="Nav-link" activeClassName="active">
                <img src={icon} /> My Git Dashboard
              </Link>
            </li>
            <li className="About">
              <Link to={'/about'} className="Nav-link" activeClassName="active">
                About
              </Link>
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
