import React, { Component} from 'react';
import {Breadcrumb} from 'react-bootstrap'

class About extends Component{

render(){
  return (
    <div className="container">
<div className="center"> 
        
        <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>About</Breadcrumb.Item>
                </Breadcrumb>
        <h3>About</h3>
   
    </div>
    </div>
    
   
  );
}
  
}

export default About;