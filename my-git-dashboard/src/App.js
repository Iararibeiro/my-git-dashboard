import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Login />
      <Footer />
      </div>
    );
  }
}

export default App;
