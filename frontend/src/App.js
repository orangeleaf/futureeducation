import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

import Header from './component/header/Header.js';
import Footer from './component/footer/Footer.js';
import Home from './component/home/Home';
import Institute from './component/institutes/institute/Institute';
import InstituteInfo from './component/institutes/instituteinfo/InstituteInfo';
import University from './component/universities/university/University';
import UniversityInfo from './component/universities/universityinfo/UniversityInfo';
import AddUniversity from './component/universities/adduniversity/AddUniversity';
import About from './component/about/About';
import ContactUs from './component/contactus/ContactUs';
import LoginPage from './component/login/LoginPage';
import LoginForm from './component/login/loginform/LoginForm';
import RegistrationForm from './component/login/registrationform/RegistrationForm';
import CompareInstitutes from './component/institutes/compareinstitute/CompareInstitutes';
import AddInstitute from './component/institutes/addcollege/AddCollege';
import MeetFounder from './component/founder/MeetFounder';
import PageNotFound from './component/pagenotfound/PageNotFound';
import AddInstitutePage from './component/addinstitutepage/AddInstitutePage';
import AddCollege from './component/institutes/addcollege/AddCollege';

class App extends Component {


    render() {
        return (
            <Router>
<div>
                    <Header />
                </div>
                <div>
                <Switch>
                        <Route exact path="/" component={Home} />
                        {/* <Route exact path="/home" component={Home} /> */}
                        <Route exact path="/institutes" component={Institute} />
                        <Route path="/institutes/:id" component={InstituteInfo} />
                        <Route exact path="/universities" component={University} />
                        <Route exact path="/universities/:id" component={UniversityInfo} />
                        <Route exact path="/adduniversities" component={AddUniversity} />
                        <Route path="/about" component={About} />
                        <Route path="/contactus" component={ContactUs} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/loginform" component={LoginForm} />
                        <Route path="/register" component={RegistrationForm} />
                        <Route exact path="/compare" component={CompareInstitutes} />
                        <Route exact path="/addinstitutes" component={AddInstitutePage} />
                        <Route exact path="/addcolleges" component={AddCollege} />
                        {/* <Route exact path="/jayantipusp" component={MeetFounder} /> */}
                        <Route path="**" component={PageNotFound} />
                    </Switch>
                </div>
                <div >
                    <Footer />
                </div>
            </Router>
                
        );
    }
}

export default App;