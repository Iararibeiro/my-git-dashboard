import React from 'react';
import Header from './Header';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { Link } from 'react-router-dom';
import { Form, FormGroup, FormLabel, FormControl, Button, FormCheck } from "react-bootstrap";

import icon from '../img/icon.svg';

class Register extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <div className="dashboard">
          <div className="box">
            <h1><img src={icon} alt="the icon symbol"/> My Git Dashboard </h1>
            <div className="New-Account">
              <p> New Account </p>
              <Form>
              <FormGroup controlId="formUserName">
                <FormLabel> Email </FormLabel>
                <FormControl type="text" placeholder="Enter email" />
              </FormGroup>
                <FormGroup controlId="formBasicEmail">
                  <FormLabel> Full name </FormLabel>
                  <FormControl type="email" placeholder="Enter name" />
                </FormGroup>
                <FormGroup controlId="formBasicPassword">
                  <FormLabel> Password </FormLabel>
                  <FormControl type="password" placeholder="Password" />
                </FormGroup>
                <FormGroup controlId="formBasicPassword">
                  <FormLabel> Confirm Password </FormLabel>
                  <FormControl type="password" placeholder="Password" />
                </FormGroup>
                <FormGroup controlId="formBasicChecbox">
                  <FormCheck type="checkbox" label="I agree with the terms" />
                </FormGroup>
                <Button className="Default-btn" variant="primary" type="submit">
                  Register
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;
