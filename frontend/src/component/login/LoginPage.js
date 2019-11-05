import React, { Component } from 'react';
// import '../../App.scss';
import {Nav, Tabs, Tab} from "react-bootstrap"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import LoginForm from '../login/loginform/LoginForm';
import RegistrationForm from '../login/registrationform/RegistrationForm';
import Home from '../home/Home'


class LoginPage extends Component {
   

    render() {
        return (
            <div className="container" >
                <br/>
                  <Tabs justify id="controlled-tab-example" >
      
      <Tab eventKey="login" title="Login">
          
        <LoginForm />
      </Tab>
      <Tab eventKey="Register" title="Register">
        <RegistrationForm />
      </Tab>
    </Tabs>
            </div>
        )
    }
}

export default LoginPage