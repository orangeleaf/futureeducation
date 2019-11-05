import React, { Component } from 'react'
import { Nav, Navbar, NavbarBrand, Form, FormControl, Button, NavDropdown, Dropdown } from 'react-bootstrap'
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
// import Tutor from './Tutor'
// import TutorInfo from './TutorInfo'
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

const abrand = {
    color: 'orange',
    fontWeight: 'bold',
    fontStyle: 'italic',
    // fontSize: '20px'
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
                    <Navbar sticky="top" bg="dark" variant="dark"  >
                    <Navbar.Brand href="/home" style={abrand}>Future Education</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="Institutes" id="nav-dropdown" color="white">
                                <NavDropdown.Item ><NavLink to="/institutes" style={agray}>Colleges</NavLink></NavDropdown.Item>
                                <NavDropdown.Item ><NavLink to="/universities" style={agray}>Universities</NavLink></NavDropdown.Item>
                                {/* <NavDropdown.Item ><NavLink to="/schools" style={agray}>Schools</NavLink></NavDropdown.Item> */}
                                <Dropdown.Divider />
                                <NavDropdown.Item ><NavLink to="/addinstitutes" style={agray}>Add Institute</NavLink></NavDropdown.Item>
                                {/* <NavDropdown.Item ><NavLink to="/adduniversities" style={alink}>Add Universities</NavLink></NavDropdown.Item> */}
                            </NavDropdown>
                            
                        </Nav>
                        <Nav>
                        <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contactus">Contact Us</Nav.Link>
                        </Nav>
                        
                            </Navbar.Collapse>
                    </Navbar>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        {/* <Route exact path="/tutors" component={Tutor} />
                        <Route path="/tutors/:id" component={TutorInfo} /> */}
                        <Route exact path="/institutes" component={Institute} />
                        <Route path="/institutes/:id" component={InstituteInfo} />
                        <Route exact path="/universities" component={University} />
                        <Route exact path="/universities/:id" component={UniversityInfo} />
                        <Route exact path="/adduniversities" component={AddUniversity} />
                        <Route path="/about" component={About} />
                        <Route path="/contactus" component={ContactUs} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/loginform" component={LoginForm} />
                        <Route path="/register" component={RegistrationForm} />
                        <Route exact path="/compare" component={CompareInstitutes} />
                        <Route exact path="/addinstitutes" component={AddInstitute} />
                        <Route path="**" component={PageNotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default NavigationBar