import {Component} from "react";
import React from 'react';
import '../styles/AboutMe.css'
import {Divider} from 'antd';
import 'antd/dist/antd.dark.min.css';

class AboutMe extends Component {
    render() {
        return (
            <div className='intersect'>
                    <div className="row align-items-center px-3">
                        <div style={{flexBasis: "80%"}}>
                            <Divider orientation="left">
                                <h2> About Me</h2>
                            </Divider>
                        </div>
                        <div style={{flexBasis: "80%"}}>
                            <p>
                                Hello! My name is Ben and I enjoy creating things that live on the internet. My
                                interest in web development started a year ago when I wanted a place to display my work
                                — turns out there’s plenty of templates and websites dedicated to this process but,
                                where’s the fun in that!
                            </p>

                            <p> I've recently graduated from Northeastern University with a bachelor’s degree in
                                Bioengineering with a minor in Computer Science. My goal is to pursue a career in
                                software development. Through co-ops and courses, programming became an essential but
                                also a fascination.
                                I began learning outside of school. This website is one of many personal projects.
                                I'm working to explore what I enjoy and its
                                intersection with the next step in my career.
                            </p>
                            {/*<p> When I'm not working towards switching careers, */}
                            {/*    I try and stay active by hiking and playing pickup soccer or basketball at the gym. When I am inside I watch a decent amount of science*/}
                            {/*    and math youtubers and might start my own channel if this software career doesn't pan*/}
                            {/*    out.*/}
                            {/*</p>*/}
                        </div>
                    </div>
            </div>
        );
    }
}

export default AboutMe;