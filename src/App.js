import './App.css';
import React, {Component} from "react";
import Hero from "./components/Hero";
// import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import WorkExperience from "./components/WorkExperience";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navi from "./components/Navi";
import Foot from "./components/foot";

function disableScroll() {
    document.body.classList.add('stop-scrolling');
}

function enableScroll() {
    document.body.classList.remove('stop-scrolling')
}

class App extends Component {
    state = {
        t: new Date().getMilliseconds(),
        email: "sylvanus.b@northeastern.edu",
        phone: "253-820-0491",
    };

    render() {
        return (

            <div className="Container">

                {/*<NavBar/>*/}
                <Navi></Navi>
                <main className="container-main">
                    <Hero delay="1300ms"/>
                    <AboutMe/>
                    <WorkExperience/>
                    <Experience/>
                    <Contact email={this.state.email}></Contact>
                </main>
                <Foot/>
            </div>


        );
    }

    handleEnd = (ev) => {
        if (ev.target.classList.contains('hero')) {
            enableScroll();
            document.removeEventListener('transitionend', this.handleEnd, true)
        }
    }

    obs = () => {
        const componentWrapper = document.querySelectorAll(".intersect")
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('shown');
                        observer.unobserve(entry.target);
                    }
                })
            }, {threshold: 0.3}
        )

        componentWrapper.forEach(entry => {
            observer.observe(entry);
        })
    }

    componentDidMount() {
        disableScroll();
        document.addEventListener('transitionend', ev => this.handleEnd(ev));
        this.obs();
    }

    componentWillUnmount() {
        document.removeEventListener('transitionend', ev => this.handleEnd(ev));
    }
}

export default App;


