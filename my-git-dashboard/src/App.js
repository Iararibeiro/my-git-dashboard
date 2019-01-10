import React, { Component } from 'react';
import icon from './img/icon.svg';
import './App.css';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={icon} /> My Git Dashboard
      </header>
      <div className="dashboard">
      </div>
      <Footer />
      </div>
    );
  }
}

export default App;
