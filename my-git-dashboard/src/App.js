import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="App">
      { !isAuthenticated() && <Login /> }
      { isAuthenticated() && <Dashboard /> }
      </div>
    );
  }
}

export default App;
