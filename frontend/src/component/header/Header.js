import React, { Component } from 'react';
import {Row, Col,Container, Card,CardImg} from 'react-bootstrap'
import NavigationBar from '../navigationbar/NavigationBar'
import {Link} from 'react-router-dom'
import LoginForm from '../login/loginform/LoginForm';
import logo from '../../images/logo11.png'

// import img9 from '../images/img9.png';


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

      <div >
        
        <div className="header">
          
          <Row>
          <Col sm={11}><a href="/home" style={astyle}>
            <img src={logo} alt="logo.png" />
            Future Education</a></Col>
          {/* <Col sm={1}><a href="/login" style={alink}>LOGIN</a></Col> */}
        </Row>
        <div className="main">
        <NavigationBar />
        <Card>
          {/* <CardImg img={img9}/> */}

        
        </Card>
        </div>
       
       
        </div>
        
      </div>

    );
  }

}

export default Header;