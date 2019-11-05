import React, { Component } from 'react';
// import '../App.scss';
import { Form, FormGroup, FormControl, FormLabel, FormText, FormCheck, Button, Row } from 'react-bootstrap'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value

    this.setState({
      [name]: value
    })
    // this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    const email = this.state.email;
    const password = this.state.password;
    alert(email + " " + password)
  }

  render() {
    return (
      <div className="container">
        <Row>
          <br></br>
          <Form onSubmit={this.handleSubmit}>
            <br />
            <h4>Login Form</h4>
            <hr />
            <FormGroup controlId="formBasicEmail">
              <FormLabel>Email address</FormLabel>
              <FormControl type="email" name="email" placeholder="Enter email" onChange={this.handleChange} />
              <FormText className="text-muted">
                We'll never share your email with anyone else.
          </FormText>
            </FormGroup>
            <FormGroup controlId="formBasicPassword">
              <FormLabel>Password</FormLabel>
              <FormControl type="password" name="password" placeholder="Password" onChange={this.handleChange} />
            </FormGroup>
            {/* <FormGroup controlId="formBasicCheckbox">
              <FormCheck type="checkbox" label="Check me out" />
            </FormGroup> */}
            <Button variant="primary" type="submit">
              Login
  </Button>
          </Form>
        
        </Row>
        <br/>
        <br/> 
      </div>
    );
  }

}

export default LoginForm;
