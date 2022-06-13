import React, {Component} from 'react';
import {CSSTransition} from "react-transition-group";



class Hero extends Component {
    state = {width: 0, height: 0, marginal: 0, loaded: false};

    render() {
        return (<CSSTransition className="px-4 py-5 text-center hero" in={this} appear={true} timeout={1000}
                               style={{
                                   transitionDelay: this.props.delay,
                                   height: this.state.height - this.state.marginal  ,
                                   marginTop: this.state.marginal + "px"
                               }}>
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-3 fw-bold">Hi. I'm Ben.</h1>
                <h1 className="display-3 fw-bold">A Bioengineer.</h1>
                <div className="d2 mx-auto">
                        <p className="a-flow">I specialized in Signal and Image Processing which introduced me to the
                            world of computer science.</p>
                </div>
            </div>

        </CSSTransition>)
    }

    updateDimensions = () => {
        this.setState({width: window.innerWidth, height: window.innerHeight, marginal: window.innerHeight/5});
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
        this.updateDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }



}

export default Hero;