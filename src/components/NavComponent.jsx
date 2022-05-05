import React, {Component} from "react";

class NavComponent extends Component {
    render() {
        return (
            <a className="nav-link " href={this.props.href}>
                        <span
                            className="badge badge-pill badge-primary">
            {this.props.value}
            </span>
            </a>

        )
    }
}


export default NavComponent;
