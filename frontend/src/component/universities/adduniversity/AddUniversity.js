import React, { Component } from 'react';
// import './App.css';
import { Form, FormGroup, FormControl, FormLabel, FormCheck, Row, Col, Button } from 'react-bootstrap'

class AddUniversity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            type: '',
            estd: '',
            specialization: '',
            city: '',
            state: ''

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

    async handleSubmit(event) {
        event.preventDefault()

        // const response = await fetch('http://localhost:8080/institutes')

        fetch('http://localhost:8080/universities', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                description: this.state.description,
                type: this.state.type,
                estd: this.state.estd,
                specialization: this.state.specialization,
                city: this.state.city,
                state: this.state.state

            })

        })
        alert("Institute " + this.state.name + " information was added." + `\n` + "Thank you!!")

    }

    render() {
        return (
            <div className="container">
                <br></br>
                <Form onSubmit={this.handleSubmit}>
                    <h4>Add University</h4>
                    <hr />
                    <Row>
                        <FormGroup as={Col}>
                            <FormLabel>University</FormLabel>
                            <FormControl type="name" placeholder="University" name="name" onChange={this.handleChange} />
                        </FormGroup>
                    </Row>

                    <Row>
                        <FormGroup as={Col} >
                            <FormLabel>Description</FormLabel>
                            <FormControl type="description" placeholder="Full name" name="description" onChange={this.handleChange} />
                        </FormGroup>
                    </Row>

                    <Row>
                        <FormGroup as={Col} >
                            <FormLabel>Type</FormLabel>
                            <FormControl as="select" name="type" onChange={this.handleChange}>
                            <option >Choose...</option>
                                <option >State</option>
                                <option>Central</option>
                                <option >Private</option>
                                <option>Deemed</option>

                            </FormControl>
                        </FormGroup>

                        <FormGroup as={Col} >
                            <FormLabel>Estd</FormLabel>
                            <FormControl type="estd" placeholder="Year of establishment" name="estd" onChange={this.handleChange} />
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup as={Col} >
                            <FormLabel>Specialization</FormLabel>
                            <FormControl as="select" name="approval" onChange={this.handleChange}>
                            <option >Choose...</option>
                                <option >General</option>
                                <option>Agriculture</option>

                            </FormControl>
                        </FormGroup>

                        <Row>
                            <FormGroup as={Col} controlId="formGridCity">
                                <FormLabel>City</FormLabel>
                                <FormControl name="city" onChange={this.handleChange} />
                            </FormGroup>

                            <FormGroup as={Col} controlId="formGridState">
                                <FormLabel>State</FormLabel>
                                <FormControl as="select" name="state" onChange={this.handleChange}>
                                <option >Choose...</option>
                                    <option >Delhi</option>
                                    <option>Karnataka</option>
                                    <option>Maharastra</option>
                                    <option>Tamil Nadu</option>
                                    <option>Jharkhand</option>
                                    <option>Bihar</option>
                                    <option>Uttar Pradesh</option>
                                    <option>West Bengal</option>
                                    <option >Andhra Pradesh</option>
                                </FormControl>
                            </FormGroup>
                        </Row>


</Row>
                        <Button variant="primary" type="submit">
                            Add
  </Button>
                </Form>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
            </div>
                );
            }
        
        }
        
        export default AddUniversity;
