import './App.css';
import React, {Component} from "react";
import Hero from "./components/Hero";
import Foot from "./components/foot";
import NavBar from "./components/NavBar";
import EmailContact from "./components/emailContact";
import AboutMe from "./components/AboutMe";
import WorkExperience from "./components/WorkExperience";
import Experience from "./components/Experience";
import Contact from "./components/Contact";


class App extends Component {
    state = {
        t: new Date().getMilliseconds(),
        email: "sylvanus.b@northeastern.edu",
        phone: "253-820-0491"
    };


    render() {
        return (
            <div scroll="no">
                <NavBar/>
                <main className="container">
                    <Hero delay="2000ms"/>
                    <AboutMe/>
                    <WorkExperience/>
                    <Experience/>
                    <Contact email={this.state.email}></Contact>
                </main>
            </div>
        );
    }
}

export default App;


