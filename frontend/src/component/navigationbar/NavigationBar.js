import React, { Component } from 'react'
import { Nav, Navbar, ListGroup, NavDropdown, Dropdown } from 'react-bootstrap'
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
import AddInstitute from '../institutes/addinstitute/AddInstitute'
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
    fontSize: '2em'
}

const name = {
    backgroundColor: "gray",
    fontColor : 'black'
}

const agray = {
    color: 'gray',
    fontWeight: 'bold'
}

class NavigationBar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar sticky="top" bg="info" variant="light" >
                    
                        <Navbar.Brand href="/home" style={abrand}>
                        <img src={logo} alt="logo.png" />
                            Future Education</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <NavDropdown title="Institutes" >
                                <NavDropdown action="true"  className="dropright" title="Universities" >       
                                    <NavDropdown.Item action="true"  href="/universities" >List of Universities</NavDropdown.Item>
                                    <NavDropdown.Item action="true"  href="/adduniversities">Add your University</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown action="true" className="dropright" title="Colleges" >       
                                    <NavDropdown.Item action="true"  href="/institutes">List of Colleges</NavDropdown.Item>
                                    <NavDropdown.Item action="true"  href="/addinstitutes">Add your College</NavDropdown.Item>
                                    </NavDropdown>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/contactus">Contact Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                 
                </div>
            </Router>
        )
    }
}

export default NavigationBar