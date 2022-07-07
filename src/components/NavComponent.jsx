import React, {Component} from "react";
import {Button} from "antd";


class NavComponent extends Component {
    state = {className: "ghost"}

    render() {
        return (
            <a className="nav-link" href={this.props.href} target={this.props.target} rel={this.props.rel}>
                <Button  type={this.state.className} ghost shape={'round'} size={'small'} icon={this.props.icon}>
                </Button>
            </a>
        )
    }
}


export default NavComponent;
