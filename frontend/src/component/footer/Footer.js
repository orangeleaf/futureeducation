import React, { Component } from 'react'


class Footer extends Component {
    render() {
        return (
              
               <div className="footer"  >
                   
                   <a href="/home" >Home</a>
                   <a href="/about" >About</a>
                   <a href="/contactus" >Contact Us</a>
                   <div className="copyright">
                    <p>Web development © 2019</p>
                    </div>
               </div>


        )
    }
}

export default Footer