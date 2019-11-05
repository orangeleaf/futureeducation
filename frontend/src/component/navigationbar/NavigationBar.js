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

const abrand = {
    color: 'orange',
    fontWeight: 'bold',
    fontStyle: 'italic',
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
                    <Navbar sticky="top" bg="dark" variant="dark"  >
                        <Navbar.Brand href="/home" style={abrand}>Future Education</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <NavDropdown title="Institutes" >
                                    <NavDropdown action="true" className="dropright" title="Colleges" style={name}>       
                                    <NavDropdown.Item action="true"  href="/institutes" style={agray}>List of Colleges</NavDropdown.Item>
                                    <NavDropdown.Item action="true"  href="/addinstitutes" style={agray}>Add your College</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown action="true"  className="dropright" title="Universities" style={name}>       
                                    <NavDropdown.Item action="true"  href="/universities" style={agray}>List of Universities</NavDropdown.Item>
                                    <NavDropdown.Item action="true"  href="/adduniversities" style={agray}>Add your University</NavDropdown.Item>
                                    </NavDropdown>
                                </NavDropdown>

                            </Nav>
                            <Nav>
                                <Link to="/about">About</Link>
                                <Link to="/contactus">Contact Us</Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
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