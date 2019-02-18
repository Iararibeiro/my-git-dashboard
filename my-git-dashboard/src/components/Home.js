import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import octProfile from '../img/octprofile.svg';
import axios from 'axios';
import icon from '../img/icon.svg';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userhandle: '',
      userimg: octProfile,
      hideInput: true,
      responseLogin: '',
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    this.setState({ responseLogin: event.target.value });
  }

  render(){
    return (
      <div className="dashboard">
        <div className="box">
          <h1><img src={icon} alt="the icon symbol"/> My Git Dashboard </h1>
          <div className="UserPicture">
            <img src={this.state.userimg} alt="the octcat"/>
          </div>
          <div className="LoginInfo">
            <GoogleLogin
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={this.handleLogin}
              onFailure={this.handleLogin}
            />
            <FacebookLogin
              appId="1088597931155576"
              autoLoad={true}
              fields="name,email,picture"
              onClick={this.handleLogin}
              callback={this.handleLogin}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
