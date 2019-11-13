import React, { Component } from 'react';
// import '../../App.scss';
import { Nav, Tabs, Tab } from "react-bootstrap"
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
import AddInstitute from '../institutes/addcollege/AddCollege';
import AddUniversity from '../universities/adduniversity/AddUniversity';


class AddInstitutePage extends Component {


    render() {
        return (
            <div className="container" >
                <br />
                <Tabs justify id="controlled-tab-example" >

                    <Tab eventKey="college" title="College">
                        <AddInstitute />
                    </Tab>
                    <Tab eventKey="university" title="University">
                        <AddUniversity />
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default AddInstitutePage