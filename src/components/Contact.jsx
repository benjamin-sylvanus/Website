import {Component} from "react";
import EmailContact from "./emailContact";
import {Divider} from "antd";


class Contact extends Component {
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
                                {/*<p>Although I’m not currently looking for any new opportunities, my inbox is always*/}
                                {/*    open.*/}
                                {/*    Whether you have a question or just want to say hi, I’ll try my best to get back to*/}
                                {/*    you!</p>*/}
                                <p>I’m currently exploring full times opportunities while expanding my network and experience within the tech world.
                                    Whether you have a question or just want to say hi, I’ll try my best to get back to
                                    you!</p>
                            </div>
                            <EmailContact email={email}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;