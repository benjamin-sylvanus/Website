import React, {Component} from 'react';
import Coldflex from "./coldflex";
import {CSSTransition} from "react-transition-group";

class Features extends Component {
    render() {
        return (
            <CSSTransition className="div">
            <div>
                <div className="dropdown-divider"></div>
                <h2 className="pb-2 border-bottom">Background</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <Coldflex delay={3000}></Coldflex>
                    <Coldflex delay={3000}></Coldflex>
                    <Coldflex delay={3000}></Coldflex>
                </div>
            </div>
            </CSSTransition>)
    }
}

export default Features;
