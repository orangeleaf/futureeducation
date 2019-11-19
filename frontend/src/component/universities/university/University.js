import React, { Component } from 'react';
import { Router, Link, Route, Switch } from 'react-router-dom'
import { Form, Breadcrumb, Card, Row, Col } from 'react-bootstrap'
import UniversityInfo from '../universityinfo/UniversityInfo';
import ReactPaginate from 'react-paginate';



class University extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            universities: [],
            numberOfElements: null,
            totalElements: null
        }
        this.handlePageChange = this.handlePageChange.bind(this);
        this.fetchURL = this.fetchURL.bind(this);
    }

    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) })
    }

    async fetchURL(page) {

        const response = await fetch(`/api/universities?page=${page}&size=15`)

        const body = await response.json()
        this.setState({ universities: body.content })
        this.setState({ pageCount: body.totalPages })
        this.setState({ numberOfElements: body.numberOfElements })
        this.setState({ totalElements: body.totalElements })

        console.log(this.state.pageCount)
        console.log(this.state.numberOfElements)
        console.log(this.state.totalElements)
    }

    componentDidMount() {
        this.fetchURL()
    }

    handlePageChange(pageNumber) {
        let selected = pageNumber.selected;
        this.fetchURL(selected);
        console.log(`active page is ${selected}`);
 
    }

    render() {
        const { universities } = this.state

        let filteredUniversities = universities.filter((university) => {
            return university.description.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        })

        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/universities">Universities</Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>

                <div className="container">

                    <br />
                    <Row>
                        <Col>
                            <Form onSubmit={this.handleSubmit}>
                                <input as='search' value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="Search Universities..." />
                            </Form>
                        </Col>
                        <Col>
                        <br />
                                <div className="d-flex justify-content-center">

                                    <ReactPaginate
                                        previousLabel={'<'}
                                        nextLabel={'>'}
                                        breakLabel={'...'}
                                        breakClassName={'break-me'}
                                        pageCount={this.state.pageCount}
                                        marginPagesDisplayed={2}
                                        pageRangeDisplayed={5}
                                        onPageChange={this.handlePageChange}
                                        containerClassName={'pagination'}
                                        subContainerClassName={'pages pagination'}
                                        activeClassName={'active'}
                                    />
                                </div>
                        </Col>
                    </Row>
                    <br />
                    <div>
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
                    </div>

                    <br />
                    <br />
                    <br />
                    <br />
                    <Switch>
                        <Route exact path="/universities/:id" component={UniversityInfo} />
                        {/* <Route exact path="/compare" component={CompareInstitutes} /> */}
                    </Switch>
                </div>
            </div>
        );
    }
}

export default University;