import React, {Component} from 'react';
import {CSSTransition} from "react-transition-group";

class Hero extends Component {
    state = {width: window.innerWidth, height: window.innerHeight, marginal: window.innerHeight / 5, loaded: false};

    render() {
        return (
            <CSSTransition className="px-4 py-5 text-left hero" in={true} appear={true} timeout={1000}
                           style={{
                               transitionDelay: this.props.delay,
                               height: this.state.height - this.state.marginal,
                               marginTop: this.state.marginal + "px"
                           }}>
                <div className="px-10 py-5 text-left hero">
                    <h2 className="display-3 fw-bold"
                        style={{fontSize: "clamp(60px, 8vw, 80px)", fontWeight: 500}}>Hi. I'm Ben.</h2>
                    <h2 className="display-3 fw-bold"
                        style={{fontSize: "clamp(60px, 8vw, 80px)", fontWeight: 500}}>A Bioengineer.</h2>
                    <div className="d2">
                        <p className='p-p'>I specialized in Signal and Image Processing which introduced me to the
                            world of computer science.</p>
                    </div>


                </div>

            </CSSTransition>


        )
    }
}


export default Hero;