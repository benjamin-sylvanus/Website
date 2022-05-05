import './App.css';
import React, {Component} from "react";
import NavBar from "./components/NavBar";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Foot from "./components/foot";
import {CSSTransition} from "react-transition-group";

class App extends Component {

    state = {
        navRight: [{id: 1, value: "Twitter", href: "https://Twitter.com", delay: 1000},
            {id: 2, value: "IG", href: "https://Instagram.com", delay: 2000},
            {id: 3, value: "Github", href: "https://Github.com", delay: 3000},
            {id: 4, value: "LinkedIn", href: "https://LinkedIn.com", delay: 4000},
            {id: 5, value: "Resume", href: '404', delay: 5000}],
        navLeft: [{id: 0, value: "Logo", href: "404", delay: 0}],
        t: new Date().getMilliseconds()
    };


    render() {
        return (<main className="container">
                <CSSTransition in={this} timeout={3000}
                               className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" appear={true}>
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                        <div className="container-fluid">
                            <NavBar elements={this.state.navLeft} formation="navbar-nav me-auto mb-2 mb-lg-0"
                                    doLoad={true} wait={0} ></NavBar>
                            <NavBar elements={this.state.navRight} formation="navbar-nav me-auto mb-2 mb-md-0"
                                    doLoad={true} wait={1000}/>
                        </div>
                    </nav>
                </CSSTransition>
                <Hero delay="1000ms"/>
                <Features delay="3000ms"/>
            <Foot>  </Foot>
            </main>);
    }
}

export default App;
