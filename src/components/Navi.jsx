import {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/NavBar.css';
import {Nav} from "react-bootstrap";
import {GithubOutlined, LinkedinOutlined, FunctionOutlined} from '@ant-design/icons';
import {CSSTransition} from "react-transition-group";
import {Button} from "antd";


let d = 100;

class Navi extends Component {
    state = {
        resume: {
            id: 3, value: "Resume", href: 'resume.pdf', target: "_blank",
            rel: "noopener noreferrer",
            icon: <GithubOutlined/>
        },
        navRight: [{
            id: 1, value: "Github", href: "https://github.com/benjamin-sylvanus", icon: <GithubOutlined/>
        }, {
            id: 2,
            value: "LinkedIn",
            href: "https://www.linkedin.com/in/benjamin-sylvanus-930640229/",
            icon: <LinkedinOutlined/>
        },], navLeft: {
            id: 0, value: "Logo", href: ".", icon: <FunctionOutlined/>
        },
    };

    na = (nav) => {
        return (<CSSTransition in={true} appear={true} timeout={1000} className="nav-link"
                               style={{transitionDelay: d + "ms"}}>
            <li>
                <a className="nav-link" href={nav.href} target={nav.target} rel={nav.rel}>
                    <Button type={"ghost"} size={'small'} icon={nav.icon}>
                    </Button>
                </a>
            </li>
        </CSSTransition>)
    }


    render() {
        const left = this.state.navLeft;
        const right = this.state.navRight;
        const resume = this.state.resume;
        return (    <Navbar collapseOnSelect expand="lg" bsPrefix="navbar" className="navbar-m">
            <Navbar className='justify-content-start no-padding'  style={{flex:1}}>
                <CSSTransition in={true} appear={true} timeout={1000} className="nav-link"
                               style={{transitionDelay: 0 + "ms"}}>

                        <a className="nav-link" href={left.href}>
                            <Button type='ghost' size={'small'} icon={left.icon}></Button>
                        </a>
                </CSSTransition>
            </Navbar>

            <Navbar className='justify-content-end no-padding' style={{flex: "100 100 0%"}}>
                <CSSTransition in={true} appear={true} timeout={1000} className="nav-link"
                               style={{transitionDelay: d + "ms"}}>

                    <a className="nav-link" href={resume.href} target={resume.target} rel={resume.rel}>
                        <Button type={"primary"} size={'small'}>
                            {resume.value}
                        </Button>
                    </a>

                </CSSTransition>
            </Navbar>

            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>



            <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end' bsPrefix="navbar-collapse">
                <Nav>
                    <ul className='navbar-nav'>
                        {right.map(nav => {
                            d += 100
                            return (this.na(nav));
                        })}
                    </ul>
                </Nav>
            </Navbar.Collapse>
        </Navbar>);
    }
}

export default Navi;