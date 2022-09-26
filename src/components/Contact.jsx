import {Component} from "react";
import {Button, Divider} from "antd";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

const renderTooltip = (props,text) => (
    <Tooltip id="email-tooltip" {...props}>
        {text}
    </Tooltip>
);

class Contact extends Component {
    handleClick = (email) => {
        this.getContactEmail(email);
        const tip = document.getElementsByClassName("tooltip-inner").item(0);
        tip.innerText = "Copied"
        this.setState(tip);
    }
    getContactEmail = (email) => {
        navigator.clipboard.writeText(email).then(function () {
            console.log('Async: Copying to clipboard was successful!');
            Alert()
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
    }
    render() {
        const {email} = this.props;
        return (
            <div className='intersect'>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignContent: "center",
                        justifyContent: "center"
                    }}>
                        <div style={{display: "block", width: "80%"}}>
                            <Divider orientation="center">
                                <h2>Get in Touch</h2>
                            </Divider>
                        </div>
                    </div>

                    <div className="flex-column justify-content-center align-items-center" style={{paddingBottom:"30%"}}>
                        <div className="px-3 mt-0 mb-5 text-center">
                            <div className="d2 mx-auto" style={{maxWidth: "65%"}}>
                                <p>I’m currently exploring full times opportunities while expanding my network and experience within the tech world.
                                    Whether you have a question or just want to say hi, I’ll try my best to get back to
                                    you!</p>
                            </div>
                            <OverlayTrigger placement="right" delay={{show: 250,hide: 300}} overlay={renderTooltip(this.props,"Copy")}>
                                <Button type={"ghost"} ghost onClick={()=>this.handleClick(email)}>Email</Button>
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;