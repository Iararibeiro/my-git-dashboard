import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Footer from './components/Footer';
import About from './components/About';
import Register from './components/Register';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth'
import history from './history';
import Home from './components/Home';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/register" component={Register}/>
        <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
        <Footer />
      </div>
    </Router>
  );
}
