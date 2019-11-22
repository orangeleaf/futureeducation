import React, { Component } from 'react';
import { Breadcrumb, Form, Button, Row, Col } from 'react-bootstrap'


class ContactUs extends Component {
constructor(props){
    super(props)
    this.state = {
        fname : '',
        lname : '',
        email : '',
        phone : '',
        type: 'Feedback',
        text : ''
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

    async handleSubmit(event){
        event.preventDefault()
        fetch('/api/contactus', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fname: this.state.fname,
                lname: this.state.lname,
                email: this.state.email,
                phone: this.state.phone,
                approval: this.state.approval,
                text: this.state.text

            })

        })

        alert("Thank you for contacting us")

    }


    render() {
        return (
            <div >
                <div className = "center" >
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
                </Breadcrumb>
                
                <h3>Contact Us</h3>
                <br /> 
                   <div className="container">
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                      
                           <Col>
                           <Form.Label >First Name</Form.Label>
                           </Col>
                       <Col><Form.Control name="fname" placeholder="First name" onChange={this.handleChange}/></Col>        
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                    <Form.Label>Last Name</Form.Label> </Col>
                    <Col> <Form.Control name="lname" placeholder="Last name" onChange={this.handleChange}/> </Col>
                       
                    </Row>
                    <br/>
                    <Row>
                    <Col>
                            <Form.Label>Email address</Form.Label> </Col>
                            <Col><Form.Control name="email" placeholder="Enter email" onChange={this.handleChange}/> </Col>
                    </Row>
                    <br/>
                    <Row>
                    <Col>
                            <Form.Label>Phone (optional) </Form.Label> </Col>
                            <Col><Form.Control name="phone" placeholder="" onChange={this.handleChange}/> </Col>
                    </Row>
                    <br/>
                    <Row>
                    <Col>
                            <Form.Label>Type</Form.Label>  </Col>
                            <Col><Form.Control as="select" name="approval" onChange={this.handleChange}>
                                <option >Feedback</option>
                                <option>Add Institute request</option>
                                <option>Others</option> 
                            </Form.Control> </Col>
                        </Row>
                        <br/>
                    <Row>
                        <Col>
                            <Form.Label>Subject</Form.Label> </Col>
                            <Col> <Form.Control as="textarea" name="text" placeholder="" onChange={this.handleChange}/> </Col> 
                    </Row>
                    <br/>
                    <Row>
                        <Col></Col>
                        <Col>
                    <Button type="submit" className="btn btn-info btn-block">
                        Send
                    </Button>
                    </Col>
                    </Row>
                </Form>
                </div> 
                </div>
            
            </div>

        );
    }

}

export default ContactUs;