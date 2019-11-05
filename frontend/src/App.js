import React, { Component } from 'react';
import './App.css';

import Header from './component/header/Header.js';
import Footer from './component/footer/Footer.js';

class App extends Component {



    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    {/* <NavBar /> */}
                </div>
                <div >
                    <Footer />
                </div>

            </div>
        );
    }
}

export default App;