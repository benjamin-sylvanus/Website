import {Component} from 'react';
import NavPack from "./NavPack";
import Navbar from 'react-bootstrap/Navbar';
import '../styles/NavBar.css';
import {Nav} from "react-bootstrap";

//TODO:
// Fix Collapse & Expand; Might need custom transition.
// Fix width and height of margin
// Set screen resize toggle false on show element

/**
 * Navbar Component
 */
class NavBar extends Component {
    state = {
        navRight: [{id: 1, value: "Github", href: "https://github.com/benjamin-sylvanus"}, {
            id: 2,
            value: "LinkedIn",
            href: "https://www.linkedin.com/in/benjamin-sylvanus-930640229/"
        }, {id: 3, value: "Resume", href: 'resume.pdf', target: "_blank", rel:"noopener noreferrer"}],
        navLeft: [{id: 0, value: "Logo", href: "#"}],
    };


    render() {
        return (
            <Navbar collapseOnSelect expand="md" bsPrefix="navbar">
                <NavPack elements={this.state.navLeft} formation="navbar-nav" delay={0}/>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" bsPrefix="navbar-collapse">
                    <Nav>
                        <NavPack elements={this.state.navRight} formation="navbar-nav" delay={100}/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;