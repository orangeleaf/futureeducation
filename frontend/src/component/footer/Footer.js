import React, { Component } from 'react'


class Footer extends Component {
    render() {
        return (
              
               <div className="footer"  >
                   
                   <a href="/home" >Home</a>
                   <a href="/about" >About</a>
                   <a href="/contactus" >Contact Us</a>
                   {/* <a href="/jayantipusp" >Meet Founder</a> */}
                   <div className="copyright">
                    <p>Copyright © 2019 Future Education</p>
                    </div>
               </div>


        )
    }
}

export default Footer