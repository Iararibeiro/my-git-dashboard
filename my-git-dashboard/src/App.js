import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import auth0Client from './utils/Auth';

class App extends Component {
  render() {
    return (
      <div className="App">
      { !auth0Client.isAuthenticated() && <Login /> }
      { auth0Client.isAuthenticated() && <Dashboard /> }
      </div>
    );
  }
}

export default App;
