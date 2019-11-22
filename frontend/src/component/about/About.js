import React, { Component} from 'react';
import {Breadcrumb} from 'react-bootstrap'

class About extends Component{

render(){
  return (
    
<div > 
        
        <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>About</Breadcrumb.Item>
                </Breadcrumb>
                <div className="container">
          <br />
          <br />
          <br />
          <br/>
            <p>We are on a mission to provide the latest information on colleges and admission processes to the aspiring students, so that they can be prepared best for the competitive exams and counselling processes. <br/><br/>We aim at providing the most relevant information on Universities and colleges which will help students to pick on colleges which best suits their interest.</p>
            <br />
            <br />
            <br /><br />
            <br />
            <br />
        </div>
      </div>
   
    
   
  );
}
  
}

export default About;