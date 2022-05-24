import './App.css';
import React, {Component} from "react";
import Hero from "./components/Hero";
import Foot from "./components/foot";
import NavBar from "./components/NavBar";
import EmailContact from "./components/emailContact";
import AboutMe from "./components/AboutMe";
import WorkExperience from "./components/WorkExperience";


class App extends Component {
    state = {
        t: new Date().getMilliseconds(),
        email: "sylvanus.b@northeastern.edu",
        phone: "253-820-0491"
    };


    render() {
        return (
            <div>
                <NavBar/>
                <main className="container">
                    <Hero delay="0ms"/>
                    <AboutMe/>
                    <WorkExperience/>
                    <EmailContact email={this.state.email}/>
                    <Foot/>
                </main>
            </div>
        );
    }
}

export default App;


