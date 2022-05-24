import {Component} from "react";
import React from 'react';
import '../styles/AboutMe.css'
import {Divider, Card} from 'antd';
import 'antd/dist/antd.dark.min.css'
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";

const renderTooltip = (props, text) => (<Tooltip id="email-tooltip" {...props}>
        {text}
    </Tooltip>);

const rowStyles = {
    display: "-webkit-box",
    flexWrap: "wrap",
    marginRight: "-15px",
    marginLeft: "-15px",
    webkitBoxAlign: "center !important",
    alignItems: "center !important"
}




class AboutMe extends Component {
    render() {

        return (//Fill in about me
            // <div className="row align-items-center" style={rowStyles}>
                <div style={rowStyles}>
                <div style={{flexBasis: "70%"}}>
                    <Divider orientation="left">
                        <h2> About Me</h2>
                    </Divider>
                </div>
                <div style={{flexBasis: "70%"}}>
                    <p>
                        Hello! My name is Ben and I enjoy creating things that live on the internet. My
                        interest in web development started a year ago when I wanted a place to display my work
                        — turns out theres plenty of templates and websites dedicated to this process but wheres
                        the fun in that!
                    </p>

                    <p>
                        I've Recently graduated from Northeastern University with a Bachelors Degree in
                        Bioengineering. I also received minor in Computer Science and eventually would like to
                        pursue a
                        career in software development. This website is one of many projects I'm working on to
                        explore
                        what I enjoy.
                    </p>
                    <p> When I'm not working towards switching careers I enjoy the outdoors(mostly hiking and
                        biking: not walking).
                        I used to be a gymrat but haven't consistently gone since the start of the pandemic tbd
                        whether I return. I'm a self proclaimed T.V. critic so feel free to ask me for show
                        suggestions. I also watch a decent amount of science and math youtubers and might start my
                        own channel if this software career doesn't pan out.
                    </p>

                    <div className="ant-card-hoverable" style={{cursor: "auto"}}>
                        <Card title={<Divider orientation="Center">
                            Here's a few channels I watch
                        </Divider>} bordered={false} style={{backgroundColor: "#343a40", opacity: "100%"}}>
                            <div className="row align-items-center mx-auto justify-content-lg-between">
                                <OverlayTrigger placement="bottom" delay={{show: 250, hide: 200}}
                                                overlay={renderTooltip(this.props, "Check out my favorite video")}
                                                defaultShow="">
                                    <Button variant="outline-light"
                                            href="https://www.youtube.com/watch?v=HEfHFsfGXjs">3Blue1Brown</Button>
                                </OverlayTrigger>
                                <OverlayTrigger placement="bottom" delay={{show: 250, hide: 200}}
                                                overlay={renderTooltip(this.props, "Check out my favorite video")}
                                                defaultShow=''>
                                    <Button variant="outline-light"
                                            href="https://www.youtube.com/watch?v=HEfHFsfGXjs">Veritasium</Button>
                                </OverlayTrigger>
                                <OverlayTrigger placement="bottom" delay={{show: 250, hide: 200}}
                                                overlay={renderTooltip(this.props, "Check out my favorite video")}>
                                    <Button variant="outline-light"
                                            href="https://www.youtube.com/watch?v=ZMkIiFs35HQ">Numberphile</Button>
                                </OverlayTrigger>

                            </div>
                        </Card>
                    </div>
                </div>
            </div>);
    }
}

export default AboutMe;