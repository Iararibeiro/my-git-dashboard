import React, { Component } from 'react';

import Footer from './Footer';
import Header from './Header';
import error from '../img/error.svg';

class NotFound extends Component {
  render() {
    return (
      <div className="Not-found">
      <Header />
        <div className="Note-board">
          <img src={error} alt="the icon symbol"/>
          <h1>Page not found</h1>
          <p> The page you are looking for might have been removed
          had its name changed or is temporarily unavailable.</p>
        </div>
      <Footer />
      </div>
    );
  }
}

export default NotFound;
