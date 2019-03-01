import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { Link } from 'react-router-dom';
import { Form, FormGroup, FormLabel, FormControl, Button, FormCheck } from "react-bootstrap";
import icon from '../img/icon.svg';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
          <div className="Login">
            <Form>
              <FormGroup controlId="formBasicEmail">
                <FormLabel> Login </FormLabel>
                <FormControl type="email" placeholder="Enter email" />
              </FormGroup>
              <FormGroup controlId="formBasicPassword">
                <FormLabel> Password </FormLabel>
                <FormControl type="password" placeholder="Password" />
              </FormGroup>
              <FormGroup controlId="formBasicChecbox">
                <FormCheck type="checkbox" label="Remember me" />
                <p className="Retrieve-password">Forgot password?</p>
              </FormGroup>
              <Button className="Default-btn" variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </div>
          <div className="Login-Social">
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
          <div className="Sign-up">
            <p> Don't have an account? <Link to={'/register'}>Sign up</Link></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
