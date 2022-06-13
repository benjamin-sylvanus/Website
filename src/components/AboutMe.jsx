import {Component} from "react";
import React from 'react';
import '../styles/AboutMe.css'
import {Divider, Card} from 'antd';
import 'antd/dist/antd.dark.min.css';
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";

const renderTooltip = (props, text) => (<Tooltip id="email-tooltip" {...props}>
    {text}
</Tooltip>);


class AboutMe extends Component {
    state = {
        dist: 0,
        visible: false,
        className: 'fade',
        h: window.innerHeight,
        in: false,
        observe: true,
        wrapperClassName: "transition-wrapper",
    };


    render() {


        return (//Fill in about me
            <div>
                <div className={this.state.wrapperClassName}>
                    <div className="row align-items-center px-3">
                        <div style={{flexBasis: "80%"}}>
                            <Divider orientation="left">
                                <h2> About Me</h2>
                            </Divider>
                        </div>
                        {/*TODO: Rewrite with Kates edits */}
                        <div style={{flexBasis: "80%"}}>
                            <p>
                                Hello! My name is Ben and I enjoy creating things that live on the internet. My
                                interest in web development started a year ago when I wanted a place to display my work
                                — turns out there’s plenty of templates and websites dedicated to this process but,
                                where’s the fun in that!

                            </p>

                            <p> I've recently graduated from Northeastern University with a bachelor’s degree in
                                Bioengineering with a minor in Computer Science. My goal is to pursue a career in
                                software development. Through co-ops and courses, programming became an essential but also a fascination.
                                I began learning outside of school. This website is one of many personal projects.
                                 I'm working to explore what I enjoy and its
                                intersection with the next step in my career.
                            </p>

                            <p> When I'm not working towards switching careers,
                                I enjoy the outdoors (mostly hiking and biking - not walking).
                                I used to be a gymrat but haven't gone consistently since the start of the pandemic
                                tbd whether I return. When I am inside I watch a decent amount of science
                                and math youtubers and might start my own channel if this software career doesn't pan out.


                            </p>
                        </div>
                    </div>
                </div>
            </div>);
    }


    // TODO: Fix this this call
    updateDimensions = () => {
        if (this.state.observe) {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    const ratio = entry.intersectionRatio;
                    if (entry.intersectionRatio > 0) {
                        // eslint-disable-next-line default-case
                        switch (true) {
                            case (ratio > 0.25):
                                this.setState({wrapperClassName: 'about-me-wrapper'});
                                // observer.unobserve(document.querySelector('.transition-wrapper'));
                                // window.removeEventListener('scroll', this.updateDimensions)
                                // console.log("Case: 4");
                                this.setState({observe: false});
                        }
                    }
                });
            });
            if(this.state.observe) {
                observer.observe(document.querySelector('.transition-wrapper'));
            }
        }
        // else{ window.removeEventListener('scroll', this.updateDimensions)}



    }


    componentDidMount() {
        window.addEventListener('scroll', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateDimensions)
    }
}

export default AboutMe;