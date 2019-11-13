import React, { Component } from 'react';
import { Breadcrumb, Card, Accordion, Button, Row, Col } from 'react-bootstrap'
import author from '../../images/author.JPG'

const img1 = {

    borderRadius: '50%',
    // borderRadius: '4px',
    // padding: '5px',
    width: '250px',
}

class MeetFounder extends Component {

    render() {
        return (
            <div className="container">
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header >
                            <Accordion.Toggle as={Button} variant="link" eventKey="0" >

                                About Me

                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Row>
                                    <Col sm={4}><img src={author} style={img1}></img></Col>
                                    <Col sm={8}><br></br>
                                        <Row>
                                            
                                            <Col>Name: Jayanti Pusp</Col>
                                            <Col>Location: Austin, Texas</Col>

                                        </Row>
<br/>
                                        <Row>
                                            <Col>Email: jayantipusp@outlook.com</Col>
                                            <Col>Ph: 510XXXXXXX</Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <Col>LinkedIn: <a href="https://www.linkedin.com/in/jayantipusp" target="_blank">www.linkedin.com/in/jayantipusp</a></Col>
                                            
                                        </Row>

                                    </Col>

                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Skills
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Row>
                                    <Col sm={2}>
                                    </Col>
                                    <Col sm={10}>
                                        <ul>
                                            <li>ReactJS with Redux</li>
                                            <li>JavaScript, JQuery, AJAX, HTML, CSS</li>
                                            <li>Front-end (CSS) frameworks: Bootstrap, reactstrap</li>
                                            <li>Test driven development - JEST, Enzyme</li>
                                            <li>Node.js</li>
                                            <li>J2EE Technologies</li>
                                            <li>IDE tools – IntelliJ and Eclipse</li>
                                            <li>Java Framework :- Spring Boot</li>
                                            <li>Database :- DBeaver and PostgreSQL</li>
                                            <li>SCM - GitHub</li>
                                            <li>SAP XI\PI :- JDBC adapter, Idoc Adapter, RFC Lookups, UDFs, File Adapters, BPM, Mapping, Proxies, SOAP adapter, Java Mapping,</li>
                                            <li>SAP ABAP :- Reports, Function Modules, ALV, User exits, Screens, ALE\ IDOCs,</li>
                                            <li>SAP BO\WEBI :- Complex Webi reports using Variables, Drill Downs, Sections, breaks, and Merged Dimensions , Functions, Sections, Controls, Import data from data source like Universe and excel sheet</li>
                                            <li>SAP Xcelsius :- Created Dashboard User Interface Prototype for the different Projects based on User needs, Data Visualizations, Charts, Dynamic Selections & Visibility, Tabs, Alerts, User Selection Components, Multiple Drill Downs</li>
                                        </ul>
                                    </Col>

                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                Experience
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <Row>
                                    <Col sm={2}>
                                    </Col>
                                    <Col>
                                        Self Motivated Front end Web Developer with 9 months of experience in building and maintaining responsive websites.
                                    <br />Proficient in ReactJS, HTML, CSS, JavaScript,J2EE Technologies, Java Framework Spring Boot, Database DBeaver and PostgreSQL, SCM on GitHUb; plus modern libraries and frameworks.
                                       <br /> Also, Experienced SAP Integration Consultant with overall 6 years and 7 months of experience.
                                       Work well independently or <br />in a group setting, successfully implementing and achieving the various project lifecycle milestone.
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                Projects
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>


                                <Row>
                                    <Col>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Body>
                                                <Card.Title>Future Education</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Front end Web Developer
                                                <br/>02/2019 - Present
                                                <br/>Austin,Texas</Card.Subtitle>
                                                <Card.Text>
                                                    <a href="http://www.futureeducation.co.in"  target="_blank">www.futureeducation.co.in</a>
                                                    <ul>
                                                        <li>Building Stable and maintainable code bases using ReactJS.</li>
                                                        <li>Invoking RESTFul API calls from React to fetch data from server</li>
                                                        <li>Source Code Maintenance in GitHub</li>
                                                        <li>Go-Live of project</li>
                                                        <li>Docker containerization</li>
                                                    </ul>
    </Card.Text>
                                                <Card.Link href="#">More...</Card.Link>
                                                
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Body>
                                                <Card.Title>SAP Labs India Pvt. Ltd.</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Program Lead<br/>
                                                09/2011 to 02/2013<br/>
                                                Bangalore, India<br/></Card.Subtitle>
                                                <Card.Text>
                                                    <ul>
                                                        <li>SAP RAC (Remote Access and Connectivity) Support</li>
                                                        <li>Extended Technical Alliance Manager</li>
                                                        <li>Development Project (SAP Business Object WEBI and SAP Xcelsius)</li>
                                                    </ul>
    </Card.Text>
                                                <Card.Link href="#">More...</Card.Link>
                                               
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>  <Card style={{ width: '18rem' }}>
                                        <Card.Body>
                                        <Card.Title>Unilever India Pvt. Ltd.</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Consultant<br/>
                                                07/2010 to 09/2011<br/>
                                                Bangalore, India<br/></Card.Subtitle>
                                                <Card.Text>
                                                    <ul>
                                                        <li>Worked on complete lifecycle of project development: Requirement Gathering, Issue resolution, Technical Design, Implementation, and Peer code review, Testing (Unit testing and Integration Testing), Go-Live and then Go-Live support.</li>
                                                        
                                                    </ul>
    </Card.Text>
                                            <Card.Link href="#">More...</Card.Link>
                    
                                        </Card.Body>
                                    </Card></Col>
                                </Row><br/>
                                <Row>
                                    <Col>  <Card style={{ width: '18rem' }}>
                                        <Card.Body>
                                        <Card.Title>SaraLee International                                                                                         </Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Technical Consultant<br/>
                                                07/2009 to 07/2010<br/>
                                                Bangalore, India<br/></Card.Subtitle>
                                                <Card.Text>
                                                    <ul>
                                                        <li>Application Maintenance and Support Project</li>
                                                        <li>Involved in daily monitoring activities of XI system like queue monitoring, message monitoring and performance monitoring.</li>
                                                        <li>Handling production P1/P2 Tickets.</li>
                                                    </ul>
    </Card.Text>
                                            <Card.Link href="#">More...</Card.Link>
                                        </Card.Body>
                                    </Card></Col>
                                    <Col>  <Card style={{ width: '18rem' }}>
                                        <Card.Body>
                                        <Card.Title>KF ABG                                                                                       </Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Software Consultant<br/>
                                                10/2008 to 06/2009<br/>
                                                Mumbai, India<br/></Card.Subtitle>
                                                <Card.Text>
                                                    <ul>
                                                        
                                                        <li>Queue monitoring, message monitoring and performance monitoring.</li>
                                                        <li>Requirement Gathering, Issue resolution, Technical Design, Implementation, and Peer code review, Testing (Unit testing and Integration Testing), Go-Live and then Go-Live support.</li>
                                                    </ul>
    </Card.Text>
                                            <Card.Link href="#">More...</Card.Link>
                                        </Card.Body>
                                    </Card></Col>
                                    <Col>  <Card style={{ width: '18rem' }}>
                                        <Card.Body>
                                            <Card.Title>TeliaSonera                                                                                       </Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Software Consultant<br/>
                                                07/2006 to 07/2008<br/>
                                                Mumbai, India<br/></Card.Subtitle>
                                                <Card.Text>
                                                    <ul>
                                                        <li>Worked on complete lifecycle of project development</li>
                                                        <li>ABAP/ XI</li>
                                                        <li>worked as PQL and was part of DIT</li>
                                                    </ul>
    </Card.Text>
                                            <Card.Link href="#">More...</Card.Link>
                                        </Card.Body>
                                    </Card></Col>
                                </Row>



                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                Education
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body>
                            <Row>
                                    <Col sm={2}>
                                    </Col>
                                    <Col sm={10}>
                                        
                                                Bachelor of Engineering in Computer Science, ( 2002 - 2006 )<br />
                                                <a href="https://www.rgpv.ac.in/" target="_blank" >Rajiv Gandhi Prodyogiki Vishwavidyalaya</a>, Bhopal, MP, India
</Col>
</Row>
</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="5">
                                Achievements
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body>
                            <Row>
                                    <Col sm={2}>
                                    </Col>
                                    <Col sm={10}>
                                        <ul>
                                            <li>Certified Developer : JavaScript, ReactJS with Redux</li>
                                            <li>SAP Certified in SAP Netweaver XI 3.0 and PI 7.0</li>
                                            <li>Have experience as Project Quality Lead and use of deliverables tracking tools as Clarity and SourceForge - Defect Management, Quality Control, Version Management, generation\ presentation of KPIs, Project Tracking.</li>
                                            <li>Received Project Star award multiple times for multiple roles.</li>
                                            <li>Work Experience as Developer\ Lead at client location Unilever India and SAP Labs India.</li>
                                           
                                        </ul>
                                    </Col>

                                </Row> 
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }

}

export default MeetFounder;