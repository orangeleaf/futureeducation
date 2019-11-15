import React, { Component } from 'react'
import { Nav, Navbar, ListGroup, NavDropdown, } from 'react-bootstrap'
import LoginForm from '../login/loginform/LoginForm'
import RegistrationForm from '../login/registrationform/RegistrationForm.js'
import PageNotFound from '../pagenotfound/PageNotFound'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import Institute from '../institutes/institute/Institute'
import InstituteInfo from '../institutes/instituteinfo/InstituteInfo'
import Home from '../home/Home'
import About from '../about/About'
import ContactUs from '../contactus/ContactUs'
import CompareInstitutes from '../institutes/compareinstitute/CompareInstitutes'
import AddInstitute from '../institutes/addcollege/AddCollege'
import LoginPage from '../login/LoginPage'
import AddUniversity from '../universities/adduniversity/AddUniversity'
import University from '../universities/university/University'
import UniversityInfo from '../universities/universityinfo/UniversityInfo'
import MeetFounder from '../founder/MeetFounder'
import logo from '../../images/logo11.png'

const abrand = {
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
    // fontSize: '1.5  em'
}
const alink = {
    color: 'white',
    fontWeight: 'bold',
    // fontStyle: 'italic',
    // fontSize: '1.5  em'
}


class NavigationBar extends Component {
    render() {
        return (
            <Router>
                <div>
                    

                    <Navbar Fixed="top" bg="info" variant="light" expand="lg">
                    <Navbar.Brand href="/home" style={abrand}>
                            <img
                                alt=""
                                src={logo}
                                width="60"
                                height="35"
                                className="d-inline-block align-top"
                            />{' '}
                            Future Education</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">

                                <NavDropdown title="Institutes" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/universities">List of Universities</NavDropdown.Item>
                                    <NavDropdown.Item href="/institutes">List of Colleges</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/addinstitutes">Add your Institute</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>

                            <Nav.Link href="/about" style={alink}>About</Nav.Link>
                            <Nav.Link href="/contactus"style={alink}>Contact Us</Nav.Link>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </Router >
        )
    }
}

export default NavigationBar