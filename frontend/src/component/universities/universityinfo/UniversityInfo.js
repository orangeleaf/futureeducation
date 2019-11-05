import React, { Component } from 'react'
import { Alert, Card, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import University from '../university/University'



class UniversityInfo extends Component {
constructor(props){
    super(props)
    this.state = {
        university: ''
    }
}
    async componentDidMount() {
        const {id} = this.props.match.params
        const response = await fetch('/api/universities/' + id)
        const body = await response.json()
        this.setState({ university: body })
    }

    render() {

        const { university } = this.state
        console.log(university)
        // if (!University) {
        //     return (
        //         <div>
        //             <Alert color="info">No University Found.</Alert>
        //             <Link to="/universities">Back to List</Link>
        //         </div>
        //     )
        // }
        return (
            <div className="container">
                <br/>
             <h4>University Details</h4>
             <br/>
                <Card>
                    <Card.Header>
                         {university.name}
                    </Card.Header>
                    <Card.Body> 
                        University : {university.description} <br/>
                        City : {university.city} <br/>
                        State : {university.state} <br/>
                        Estd. Year : {university.estd}<br/>
                	    Type : {university.type}<br/>
                        Ownership: {university.ownership} <br/>
                    </Card.Body>
                </Card>
                <br />
                <Link to="/universities">Back to List</Link>
                <br />
            </div>
        )
    }

}

export default UniversityInfo