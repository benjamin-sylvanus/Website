import './App.css';
import React, {Component} from "react";
import Hero from "./components/Hero";
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

// const breakpoints = {
//     mobile: 320,
//     mobileLandscape: 480,
//     tablet: 768,
//     tabletLandscape: 1024,
//     desktop: 1200,
//     desktopLarge: 1500,
//     desktopWide: 1920,
// }

const breakpoints = {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
}


class App extends Component {
    state = {
        t: new Date().getMilliseconds(),
        email: "sylvanus.b@northeastern.edu",
        phone: "253-820-0491",
        scrollDirection: false,
        queue: [0,0,0,0,0]
    };

    render() {
        return (
            <div className="Container">
                <Navi breakpoints={breakpoints} toDisplay = {this.state.scrollDirection}></Navi>
                <main className="container-main">
                    <Hero delay="1300ms" breakpoints={breakpoints}/>
                    <AboutMe breakpoints={breakpoints}/>
                    <WorkExperience breakpoints={breakpoints}/>
                    <Experience breakpoints={breakpoints}/>
                    <Contact breakpoints={breakpoints} email={this.state.email}></Contact>
                    <Foot breakpoints={breakpoints}/>
                </main>
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

    handleScroll = () => {
        this.state.queue.push(window.scrollY);
        const old = this.state.queue.shift();
        if (this.state.queue[4] < old+2) {
            this.setState({scrollDirection: true});
        } else {
            this.setState({scrollDirection: false});
        }
    }

    handleResize = (ev) => {
        console.log(window.innerWidth)
        console.log('a')
    }


    componentDidMount() {
        disableScroll();
        document.addEventListener('transitionend', ev => this.handleEnd(ev));
        document.addEventListener('scroll', ev => this.handleScroll(ev));
        window.addEventListener("resize", ev => this.handleResize(ev))
        this.obs();
    }

    componentWillUnmount() {
        document.removeEventListener('transitionend', ev => this.handleEnd(ev));
        document.removeEventListener('scroll',(ev) => this.handleScroll(ev));
        window.removeEventListener("resize", ev => this.handleResize(ev))
    }


}

export default App;


