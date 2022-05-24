import {Component} from "react";
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

const renderTooltip = (props,text) => (
    <Tooltip id="email-tooltip" {...props}>
        {text}
    </Tooltip>
);

class EmailContact extends Component {
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
            <OverlayTrigger placement="right" delay={{show: 250,hide: 300}} overlay={renderTooltip(this.props,"Copy")}>
                <Button variant="success" onClick={()=>this.handleClick(email)}>Email</Button>
            </OverlayTrigger>
        )
    }
}

export default EmailContact;