import React, { Component } from 'react';
import { Row, Col, Container, Card, CardImg } from 'react-bootstrap'
import NavigationBar from '../navigationbar/NavigationBar'
import { Link, Router, Switch, Route } from 'react-router-dom'
import LoginForm from '../login/loginform/LoginForm';
import logo from '../../images/logo11.png'

import Home from '../home/Home'


// import NavBar from './NavBar'


const simg = {
  width: '100%',
  // height: '350px',
  objectFit: 'cover'
}

const astyle = {
  fontFamily: 'helvetica neue',
  color: 'orange',
  fontStyle: 'italic',
  fontWeight: 'bold',
  fontSize: '25px'
}
const alink = {
  color: 'dark blue',
  fontWeight: 'bold',
}
class Header extends Component {

  render() {
    return (
        <div className="header">
          <NavigationBar />

      </div>
    );
  }

}

export default Header;