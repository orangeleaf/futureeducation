import React, { Component } from "react";
// import './App.css';
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  FormCheck,
  Row,
  Col,
  Button,
  Breadcrumb
} from "react-bootstrap";

class AddCollege extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      approval: "",
      estd: "",
      ownership: "",
      rank: "",
      type: "",
      category: "",
      address: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      totalfaculty: "",
      totalstudent: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
    console.log(name);
    // this.setState({value: event.target.value})
  }

  async handleSubmit(event) {
    event.preventDefault();

    // const response = await fetch('/api/institutes')

    fetch("/api/institutes", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
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
        address: "",
        address2: "",
        city: this.state.city,
        state: "",
        zip: "",
        totalfaculty: this.state.totalfaculty,
        totalstudent: this.state.totalstudent
      })
    });
    alert(
      "Institute " +
        this.state.name +
        " information was added." +
        `\n` +
        "Thank you!!"
    );
  }

  render() {
    return (
      <div className="container">
        <br />
        <Form onSubmit={this.handleSubmit}>
          <br />
          <h5>Please fill in your College information</h5>
          <hr />
          <Row>
            <FormGroup as={Col}>
              <FormLabel>Name</FormLabel>
              <FormControl
                type="name"
                placeholder="Institute name"
                name="name"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Row>

          <Row>
            <FormGroup as={Col}>
              <FormLabel>Description</FormLabel>
              <FormControl
                type="description"
                placeholder="Institute Full name"
                name="description"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Row>

          <Row>
            <FormGroup as={Col}>
              <FormLabel>Approval</FormLabel>
              <FormControl
                as="select"
                name="approval"
                onChange={this.handleChange}
              >
                <option>Choose...</option>
                <option>Affiliated</option>
                <option>In Progress</option>
                <option>Unknown</option>
              </FormControl>
            </FormGroup>

            <FormGroup as={Col}>
              <FormLabel>Estd</FormLabel>
              <FormControl
                type="estd"
                placeholder="Year of establishment"
                name="estd"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup as={Col}>
              <FormLabel>Ownership</FormLabel>
              <FormControl
                as="select"
                name="approval"
                onChange={this.handleChange}
              >
                <option>Choose...</option>
                <option>Govt.</option>
                <option>Private</option>
              </FormControl>
            </FormGroup>

            <FormGroup as={Col}>
              <FormLabel>Rank</FormLabel>
              <FormControl
                type="rank"
                placeholder=""
                name="rank"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Row>

          <Row>
            <FormGroup as={Col}>
              <FormLabel>Total Faculty</FormLabel>
              <FormControl
                name="totalfaculty"
                onChange={this.handleChange}
              ></FormControl>
            </FormGroup>

            <FormGroup as={Col}>
              <FormLabel>Total Student</FormLabel>
              <FormControl
                name="totalstudent"
                onChange={this.handleChange}
              ></FormControl>
            </FormGroup>
          </Row>
          <Row>
            <FormGroup as={Col}>
              <FormLabel>Type</FormLabel>
              <FormControl
                name="type"
                onChange={this.handleChange}
              ></FormControl>
            </FormGroup>
            <FormGroup as={Col}>
              <FormLabel>Category</FormLabel>
              <FormControl
                as="select"
                name="category"
                onChange={this.handleChange}
              >
                <option>Choose...</option>
                <option>Engineering</option>
                <option>Medicals</option>
                <option>Pharmacy</option>
                <option>MBA</option>
              </FormControl>
            </FormGroup>
          </Row>

          <FormGroup controlId="formGridAddress1">
            <FormLabel>Address</FormLabel>
            <FormControl
              placeholder="1234 Main St"
              name="address"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="formGridAddress2">
            <FormLabel>Address 2</FormLabel>
            <FormControl
              placeholder="Apartment, studio, or floor"
              name="address2"
              onChange={this.handleChange}
            />
          </FormGroup>

          <Row>
            <FormGroup as={Col} controlId="formGridCity">
              <FormLabel>City</FormLabel>
              <FormControl name="city" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup as={Col} controlId="formGridState">
              <FormLabel>State</FormLabel>
              <FormControl
                as="select"
                name="state"
                onChange={this.handleChange}
              >
                <option>Choose...</option>
                <option>Andhra Pradesh</option>
                <option>Assam</option>
                <option>Bihar</option>
                <option>Chandigarh</option>
                <option>Chhattisgarh</option>
                <option>Delhi</option>
                <option>Goa</option>
                <option>Gujarat</option>
                <option>Haryana</option>
                <option>Himachal Pradesh</option>
                <option>Jammu and Kashmir</option>
                <option>Jharkhand</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Madhya Pradesh</option>
                <option>Maharashtra</option>
                <option>Manipur</option>
                <option>Odisha</option>
                <option>Punjab</option>
                <option>Rajasthan</option>
                <option>Tamil Nadu</option>
                <option>Telangana</option>
                <option>Tripura</option>
                <option>Uttar Pradesh</option>
                <option>Uttarakhand</option>
                <option>West Bengal</option>
              </FormControl>
            </FormGroup>

            <FormGroup as={Col} controlId="formGridZip">
              <FormLabel>Zip</FormLabel>
              <FormControl name="zip" onChange={this.handleChange} />
            </FormGroup>
          </Row>

          <br />
<Row>
<Button type="submit" className="btn btn-info ">
            Add
          </Button>
</Row>
          
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

export default AddCollege;
