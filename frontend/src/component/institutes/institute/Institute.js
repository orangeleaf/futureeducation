import React, { Component } from 'react';
import { Router, Link, Route, Switch } from 'react-router-dom'
import { Form, Breadcrumb, Card, Row, Col } from 'react-bootstrap'
import InstituteInfo from '../instituteinfo/InstituteInfo'
import CompareInstitutes from '../compareinstitute/CompareInstitutes';
import ReactPaginate from 'react-paginate';



class Institute extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            institutes: [],
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

        const response = await fetch(`/api/institutes?page=${page}&size=15`)

        const body = await response.json()
        this.setState({ institutes: body.content })
        this.setState({ pageCount: body.totalPages })
        this.setState({ numberOfElements: body.numberOfElements })
        this.setState({ totalElements: body.totalElements })

        console.log(this.state.pageCount)
        console.log(this.state.numberOfElements)
        console.log(this.state.totalElements)
    }

    componentDidMount() {
        this.fetchURL(this.state.activePage)
    }

   handlePageChange(pageNumber) {
        let selected = pageNumber.selected;
        this.fetchURL(selected);
        console.log(`active page is ${selected}`);
    }


    render() {
        const { institutes } = this.state

        let filteredInstitutes = institutes.filter((institute) => {
            return institute.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        })

        return (
            <div >
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/institutes">Colleges</Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
                <br />
                <div className="container">
                   
                    <Row>
                        <Col>
                        <br />
                            <Form onSubmit={this.handleSubmit}>
                                <input as='search' value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="Search..." />
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
                        <div>

                            {filteredInstitutes.map((institute) =>
                                <Card key={institute.id} >
                                    <Card.Body>
                                        <Card.Header><Link to={'/institutes/' + institute.id}>{institute.description}</Link></Card.Header>
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
                            <Route exact path="/institutes/:id" component={InstituteInfo} />
                            <Route exact path="/compare" component={CompareInstitutes} />
                        </Switch>
                </div>
                </div>

                );
            }
        }
        
export default Institute;