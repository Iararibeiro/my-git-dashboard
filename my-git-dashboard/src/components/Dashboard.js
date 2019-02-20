import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import icon from '../img/icon.svg';

class Dashboard extends React.Component {
  render(){
    return (
      <div className="dashboard">
        <div className="box">
          <h1><img src={icon} alt="the icon symbol"/> My Git Dashboard </h1>
        </div>
      </div>
    )
  }
}

export default Dashboard;
