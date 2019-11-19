import React, { Component } from 'react';
import { Breadcrumb, Carousel,Row,Col } from 'react-bootstrap'
import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.jpg'
import banner3 from '../../images/banner3.jpg'
import img5 from '../../images/img5.png'
import image4 from '../../images/image4.jpeg'
import image5 from '../../images/image5.jpeg'
import image6 from '../../images/image6.jpeg'

const simg = {
  width: '50%',
  // objectFit: 'cover'
}
class Home extends Component {

  render() {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        </Breadcrumb>
        <div className="container">
        <br />
          <br />
          <br />
          <br />
          <p>Welcome !
          <br />
          <br/>
            You have clicked right. This is the place where you can be sure that your true potential will be directed in right direction. We will help you realize your true potential. Just hitch your wagon to this cruise of information.
            This unique and only of its kind website is designed to make you available lists of all the institutes of your stream, which will help you to choose in between them according to your potential.<br />
            So please go ahead and make use of this site and take one step forward towards your dream.<br/><br/> ALL THE BEST...</p>
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

export default Home;