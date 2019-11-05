import React, { Component } from 'react';
// import './App.css';
import { Form, FormGroup, FormControl, FormLabel, FormCheck, Row, Col, Button } from 'react-bootstrap'

class AddInstitute extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            approval: '',
            estd: '',
            ownership: '',
            rank: '',
            type: '',
            category: '',
            address: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            totalfaculty: '',
            totalstudent: ''


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

        fetch('http://localhost:8080/institutes', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                description: this.state.description,
                approval: this.state.approval,
                estd: this.state.estd,
                ownership: this.state.ownership,
                rank: this.state.rank,
                type: this.state.type,
                category: this.state.category,
                address: '',
                address2: '',
                city: this.state.city,
                state: '',
                zip: '',
                totalfaculty: this.state.totalfaculty,
                totalstudent: this.state.totalstudent

            })

        })
        alert("Institute "+ this.state.name + " information was added."+ `\n` + "Thank you!!" )

    }

    render() {
        return (
            <div className="container">
                <br></br>
                <Form onSubmit={this.handleSubmit}>
                    <h4>Add Institute</h4>
                    <hr />
                    <Row>
                        <FormGroup as={Col}>
                            <FormLabel>Name</FormLabel>
                            <FormControl type="name" placeholder="Institute name" name="name" onChange={this.handleChange} />
                        </FormGroup>
                    </Row>

                    <Row>
                        <FormGroup as={Col} >
                            <FormLabel>Description</FormLabel>
                            <FormControl type="description" placeholder="Institute Full name" name="description" onChange={this.handleChange} />
                        </FormGroup>
                    </Row>

                    <Row>
                        <FormGroup as={Col} >
                            <FormLabel>Approval</FormLabel>
                            <FormControl as="select" name="approval" onChange={this.handleChange}>
                                <option >Affiliated</option>
                                <option>In Progress</option>
                                <option>Unknown</option>

                            </FormControl>
                        </FormGroup>

                        <FormGroup as={Col} >
                            <FormLabel>Estd</FormLabel>
                            <FormControl type="estd" placeholder="Year of establishment" name="estd" onChange={this.handleChange} />
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup as={Col} >
                            <FormLabel>Ownership</FormLabel>
                            <FormControl as="select" name="approval" onChange={this.handleChange}>
                                <option >Govt.</option>
                                <option>Private</option>

                            </FormControl>
                        </FormGroup>

                        <FormGroup as={Col} >
                            <FormLabel>Rank</FormLabel>
                            <FormControl type="rank" placeholder="" name="rank" onChange={this.handleChange} />
                        </FormGroup>
                    </Row>

                    <Row>
                        <FormGroup as={Col} >
                            <FormLabel>Total Faculty</FormLabel>
                            <FormControl name="totalfaculty" onChange={this.handleChange}>

                            </FormControl>
                        </FormGroup>

                        <FormGroup as={Col} >
                            <FormLabel>Total Student</FormLabel>
                            <FormControl name="totalstudent" onChange={this.handleChange}>

                            </FormControl>
                        </FormGroup>
                    </Row>
                    <Row>
                    <FormGroup as={Col} >
                            <FormLabel>Type</FormLabel>
                            <FormControl name="type" onChange={this.handleChange}>

                            </FormControl>
                        </FormGroup>
                        <FormGroup as={Col} >
                            <FormLabel>Category</FormLabel>
                            <FormControl as="select" name="category" onChange={this.handleChange}>
                                <option >Engineering</option>
                                <option>Medicals</option>
                                <option>Pharmacy</option>
                                <option>MBA</option>
                            </FormControl>
                        </FormGroup>
                    </Row>

                    <FormGroup controlId="formGridAddress1" >
                        <FormLabel>Address</FormLabel>
                        <FormControl placeholder="1234 Main St" name="address" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup controlId="formGridAddress2">
                        <FormLabel>Address 2</FormLabel>
                        <FormControl placeholder="Apartment, studio, or floor" name="address2" onChange={this.handleChange} />
                    </FormGroup>

                    <Row>
                        <FormGroup as={Col} controlId="formGridCity">
                            <FormLabel>City</FormLabel>
                            <FormControl name="city" onChange={this.handleChange} />
                        </FormGroup>

                        <FormGroup as={Col} controlId="formGridState">
                            <FormLabel>State</FormLabel>
                            <FormControl as="select" name="state" onChange={this.handleChange}>
                                <option >New Delhi</option>
                                <option>Karnataka</option>
                                <option>Maharastra</option>
                                <option>Tamil Nadu</option>
                                <option>Jharkhand</option>
                                <option>Bihar</option>
                                <option>Uttar Pradesh</option>
                                <option>West Bengal</option>
                            </FormControl>
                        </FormGroup>

                        <FormGroup as={Col} controlId="formGridZip">
                            <FormLabel>Zip</FormLabel>
                            <FormControl name="zip" onChange={this.handleChange} />
                        </FormGroup>
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

export default AddInstitute;
