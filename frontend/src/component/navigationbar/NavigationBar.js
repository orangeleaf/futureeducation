import React, { Component } from 'react'
import { Nav, Navbar, ListGroup, NavDropdown, } from 'react-bootstrap'
import {
    BrowserRouter as Router,
} from "react-router-dom";

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
                    <Navbar sticky="top" bg="info" variant="light" expand="lg">
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