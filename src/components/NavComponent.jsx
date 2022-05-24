import React, {Component} from "react";

class NavComponent extends Component {
    onHover() {
        const c = this.state
        c.className = "badge badge-pill badge-secondary"
        this.setState(c)
    }

    onExit() {
        const c = this.state
        c.className = "badge badge-pill badge-primary"
        this.setState(c)
    }

    state = {className: "badge badge-pill badge-primary"}

    render() {
        return (<a className="nav-link " href={this.props.href}>
                        <span
                            className={this.state.className}
                            onMouseOver={() => this.onHover()} onMouseLeave={() => this.onExit()}>
            {this.props.value}
            </span>
            </a>
        )
    }
}


export default NavComponent;
