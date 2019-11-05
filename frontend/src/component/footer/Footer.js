import React, { Component } from 'react'
import {
    BrowserRouter as Router
} from "react-router-dom";


const astyle = {color:'black'}


class Footer extends Component {
    render() {
        return (
            <Router>
              
               <div className="footer"  >
                   
                   <a href="/home" >Home</a>
                   <a href="/about" >About</a>
                   <a href="/" >Inspiration</a>
                   <a href="/" >Newsletter</a>
                   <a href="/contactus" >Contact Us</a>
                   <a href="/addinstitutes" >Add Institute</a>
                   
                   <div className="copyright">
                    <p>Jayanti Web development © 2019</p>
                    </div>
               </div>
                
                           
            </Router>


        )
    }
}

export default Footer