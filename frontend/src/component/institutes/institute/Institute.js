import React, { Component } from 'react';
import { Router, Link, Route, Switch } from 'react-router-dom'
import { Form, Breadcrumb, Card, Row, Col } from 'react-bootstrap'
import InstituteInfo from '../instituteinfo/InstituteInfo'
// import img from '../images/image1.jpeg'
import CompareInstitutes from '../compareinstitute/CompareInstitutes';


class Institute extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            institutes: []
        }
    }

    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) })
    }

    async componentDidMount() {

        const response = await fetch('/api/institutes')
        const body = await response.json()
        this.setState({ institutes: body })
    }

    render() {
        const { institutes } = this.state
    console.log(this.state.institutes)
        let filteredInstitutes = institutes.filter((institute) => {
            return institute.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        })
        return (
            <div className="container">
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/institutes">Institutes</Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
                <br />
                <Form onSubmit={this.handleSubmit}>
                    <input as='search' value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="Search..." />
                </Form>
                <br />


                {filteredInstitutes.map((institute) =>

                    <Card key={institute.id} >
                        <Card.Body>
                            <Card.Header><Link to={'/institutes/' + institute.id}>{institute.description}, {institute.city}</Link></Card.Header>
                            <br />
                            <Card.Title>{institute.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> {institute.city}</Card.Subtitle>
                            <Row>
                                <Col>
                                    <Row>
                                        <Col><Card.Text>Ownership : {institute.ownership}</Card.Text></Col>
                                        <Col><Card.Text>Estd : {institute.estd}</Card.Text></Col>


                                    </Row>
                                    <Row>
                                        <Col><Card.Text>Approval : {institute.approval} </Card.Text></Col>
                                        <Col><Card.Text>Total Faculty : {institute.totalfaculty}</Card.Text></Col>

                                    </Row>
                                    <Row>
                                        <Col><Card.Text>Type : {institute.type}</Card.Text></Col>
                                        <Col><Card.Text>Students Enrolled : {institute.totalstudent}</Card.Text></Col>
                                    </Row>
                                    <Row>
                                        <Col><Card.Text>Category : {institute.category}</Card.Text></Col>
                                        {/* <Col><Card.Text>Students Enrolled : {institute.totalstudent}</Card.Text></Col> */}
                                    </Row>
                                </Col>
                                <Col><img 
                                // src={img} 
                                alt="thumbnail"/>
                                </Col>
                            </Row>


                            <br />
                            {/* <Form type="checkbox" className="mb-3">
                                <Form.Check type="checkbox">
                                    <Form.Check.Input type="checkbox" isValid />
                                    <Form.Check.Label>Add to Compare</Form.Check.Label>
                                    <Form.Control.Feedback type="valid">added to compare list</Form.Control.Feedback>
                                </Form.Check>
                            </Form>
                            <Link to="/compare">Add to Compare</Link> */}
                        </Card.Body>
                    </Card>

                )}
                <br />
                <br />
                <br />
                <br />
                <br />
                <Switch>
                    <Route exact path="/institutes/:id" component={InstituteInfo} />
                    <Route exact path="/compare" component={CompareInstitutes} />
                </Switch>
            </div>

        );
    }
}

export default Institute;