import React, { Component } from 'react';
import { Router, Link, Route, Switch } from 'react-router-dom'
import { Form, Breadcrumb, Card, Row, Col } from 'react-bootstrap'
import UniversityInfo from '../universityinfo/UniversityInfo';
// import InstituteInfo from '../instituteinfo/InstituteInfo'
// import img from '../images/image1.jpeg'
// import CompareInstitutes from '../compareinstitute/CompareInstitutes';


class University extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            universities: []
        }
    }

    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) })
    }

    async componentDidMount() {

        const response = await fetch('api/universities')
        const body = await response.json()
        this.setState({ universities: body })
    }

    render() {
        const { universities } = this.state
        console.log(this.state.universities)
        let filteredUniversities = universities.filter((university) => {
            return university.description.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        })
        console.log(this.state.city)
        return (
            <div className="container">
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/universities">Universities</Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
                <br />
                <Form onSubmit={this.handleSubmit}>
                    <input as='search' value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="Search Universities..." />
                </Form>
                <br />


                {filteredUniversities.map((university) =>

                    <Card key={university.id} >
                        <Card.Body>
                            <Card.Header><Link to={'/universities/' + university.id}>{university.description}, {university.city}</Link></Card.Header>
                            <br />
                            {/* <Card.Title>{university.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> </Card.Subtitle> */}
                            <Row>
                                <Col>
                                    <Row>
                                        <Col><Card.Text>Type : {university.type}</Card.Text></Col>
                                        <Col><Card.Text>Estd : {university.estd}</Card.Text></Col>

                                    </Row>
                                    <Row>
                                        <Col><Card.Text>Specialization : {university.specialization}</Card.Text></Col>
                                        <Col><Card.Text>Location : {university.city}, {university.state}</Card.Text></Col>
                                    </Row>

                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                )}
                <br />
                <br />
                <br />
                <br />
                <br />
                <Switch>
                    <Route exact path="/universities/:id" component={UniversityInfo} />
                    {/* <Route exact path="/compare" component={CompareInstitutes} /> */}
                </Switch>
            </div>

        );
    }
}

export default University;