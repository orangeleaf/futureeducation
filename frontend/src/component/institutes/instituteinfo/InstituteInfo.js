    import React, { Component } from 'react'
    import { Alert, Card, } from 'react-bootstrap'
    import { Link } from 'react-router-dom'
    import Institute from '../institute/Institute'


    class InstituteInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            institute: ''
        }
    }
        async componentDidMount() {
            const {id} = this.props.match.params
            const response = await fetch('/api/institutes/' + id)
            const body = await response.json()
            this.setState({ institute: body })
        }

        render() {

            const { institute } = this.state
            if (!Institute) {
                return (
                    <div>
                        <Alert color="info">No Institute Found.</Alert>
                        <Link to="/">Back to List</Link>
                    </div>
                )
            }
            return (
                <div className="container">
                    <br/>
                    <Card>
                        <Card.Header>
                            {institute.name}
                        </Card.Header>
                        <Card.Body> 
                            University : {institute.description} <br/>
                            City : {institute.city} <br/>
                            Ranking: {institute.rank}<br/>
                            Estd. Year : {institute.estd}<br/>
                            Type of Institute : {institute.type}<br/>
                            Ownership: {institute.ownership} <br/>
                            Approval: {institute.approval} <br/>
                            Total Faculty: {institute.totalfaculty} <br/> 
                            Total Student Enrollment: {institute.totalstudent}<br/> 
                        </Card.Body>
                    </Card>
                    <br />
                    <Link to="/institutes">Back to List</Link>
                    <br/>
                </div>
            )
        }

    }

    export default InstituteInfo