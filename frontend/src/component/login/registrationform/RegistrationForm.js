import React, { Component } from 'react';
// import '../App.scss';
import { Form, FormGroup, FormControl, FormLabel, FormCheck, Row, Col, Button } from 'react-bootstrap'

class RegistrationForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname:'',
            email: '',
            password: '',
            address: '',
            address2: '',
            city: '',
            state: 'Texas',
            zip: ''

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
        console.log(name)
        // this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        const password = this.state.password;
        alert(this.state.firstname + " " + this.state.lastname + `\n` + this.state.email + `\n` + this.state.address+ `\n` + 
        this.state.address2 + `\n` + this.state.city+ `\n` + this.state.state + `\n` + this.state.zip)
    }

    render() {
        return (
            <div className="container">
                <br></br>
                <Form onSubmit={this.handleSubmit}>
                    <h4>Registration Form</h4>
                    <hr />
                    <Row>
                    <FormGroup as={Col}>
                        <FormLabel>First Name</FormLabel>
                        <FormControl type="fname" placeholder="Enter first name" name="firstname" onChange={this.handleChange}/>
                    </FormGroup>
                    </Row>

                    <Row>
                    <FormGroup as={Col} >
                        <FormLabel>Last Name</FormLabel>
                        <FormControl type="lname" placeholder="Enter last name" name="lastname" onChange={this.handleChange}/>
                    </FormGroup>
                    </Row>

                    <Row>
                        <FormGroup as={Col} controlId="formGridEmail">
                            <FormLabel>Email</FormLabel>
                            <FormControl type="email" placeholder="Enter email" name="email" onChange={this.handleChange}/>
                        </FormGroup>

                        <FormGroup as={Col} controlId="formGridPassword">
                            <FormLabel>Password</FormLabel>
                            <FormControl type="password" placeholder="Password" name="password" onChange={this.handleChange} />
                        </FormGroup>
                    </Row>

                    <FormGroup controlId="formGridAddress1" >
                        <FormLabel>Address</FormLabel>
                        <FormControl placeholder="1234 Main St" name="address" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup controlId="formGridAddress2">
                        <FormLabel>Address 2</FormLabel>
                        <FormControl placeholder="Apartment, studio, or floor" name="address2" onChange={this.handleChange}/>
                    </FormGroup>

                    <Row>
                        <FormGroup as={Col} controlId="formGridCity">
                            <FormLabel>City</FormLabel>
                            <FormControl name="city" onChange={this.handleChange}/>
                        </FormGroup>

                        <FormGroup as={Col} controlId="formGridState">
                            <FormLabel>State</FormLabel>
                            <FormControl as="select" name="state" onChange={this.handleChange}>
                                <option >Texas</option>
                                <option>California</option>
                                <option>Florida</option>
                            </FormControl>
                        </FormGroup>

                        <FormGroup as={Col} controlId="formGridZip">
                            <FormLabel>Zip</FormLabel>
                            <FormControl name="zip" onChange={this.handleChange}/>
                        </FormGroup>
                    </Row>

                    <FormGroup id="formGridCheckbox">
                        <FormCheck type="checkbox" label="Check me out" />
                    </FormGroup>

                    <Button variant="primary" type="submit">
                        Register
  </Button>
                </Form>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }

}

export default RegistrationForm;
