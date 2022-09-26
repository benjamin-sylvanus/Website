import {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/NavBar.css';
import {Nav} from "react-bootstrap";
import {GithubOutlined, LinkedinOutlined, FunctionOutlined} from '@ant-design/icons';
import {CSSTransition} from "react-transition-group";
import {Button, Drawer} from "antd";

const navName = 'justify-content-end no-padding';
let d = 100;

class Navi extends Component {
    state = {
        visible: false, shouldDisplay: {
            position: 'fixed',
            width: "100%",
            alignContent: 'center',
            display: "unset",
            justifyContent: "space-around",
            top: "0px",
            left: '0px',
            zIndex: '15',
            backgroundColor: 'var(--standard-bg)'
        }, resume: {
            id: 3,
            value: "Resume",
            href: 'resume.pdf',
            target: "_blank",
            rel: "noopener noreferrer",
            icon: <GithubOutlined/>
        }, navRight: [{id: 1, value: "Github", href: "https://github.com/benjamin-sylvanus", icon: <GithubOutlined/>}, {
            id: 2,
            value: "LinkedIn",
            href: "https://www.linkedin.com/in/benjamin-sylvanus-930640229/",
            icon: <LinkedinOutlined/>
        }], navLeft: {id: 0, value: "Logo", href: ".", icon: <FunctionOutlined/>}
    };

    na = () => {
        let right = this.state.navRight;
        return (<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" bsPrefix="navbar-collapse">
                <Nav>
                    <ul className='navbar-nav'>{right.map(nav => {
                        d += 100;
                        return (<CSSTransition in={true} appear={true} timeout={1000} className="nav-link"
                                               style={{transitionDelay: d + "ms"}}>
                            <li><a className="nav-link" href={nav.href} target={nav.target} rel={nav.rel}>
                                <Button type={"ghost"} size={'small'} icon={nav.icon}/></a></li>
                        </CSSTransition>);
                    })}
                    </ul>
                </Nav>
            </Navbar.Collapse>)
    }

    nl = () => {
        return (<Navbar className={navName} style={{flex: 1}}>
                <CSSTransition in={true}
                               appear={true}
                               timeout={1000}
                               className="nav-link"
                               style={{transitionDelay: 0 + "ms"}}>

                    <a className="nav-link" href={this.state.navLeft.href}>
                        <Button type='ghost' size={'small'} icon={this.state.navLeft.icon}/>
                    </a>
                </CSSTransition>
            </Navbar>)
    }

    nr = () => {
        const resume = this.state.resume;
        return (<Navbar className={navName} style={{flex: "100 100 0%"}}>
                <CSSTransition
                    in={true}
                    appear={true}
                    timeout={1000} className="nav-link"
                    style={{transitionDelay: d + "ms"}}>

                    <a className="nav-link" href={resume.href} target={resume.target} rel={resume.rel}>
                        <Button type={"primary"} size={'small'}>
                            {resume.value}
                        </Button>
                    </a>
                </CSSTransition>
            </Navbar>)
    }

    showDrawer = () => {
        this.setState({visible: true})
        this.setState({
            shouldDisplay: {
                position: 'fixed',
                width: "100%",
                alignContent: 'center',
                display: "none",
                justifyContent: "space-around",
                top: "0px",
                left: '0px',
                zIndex: '15',
                backgroundColor: "var(--standard-bg-cold)",
                boxShadow: '0 10px 30px -10px var(--navy-shadow)',
            }
        })
    };

    onClose = () => {
        this.setState({visible: false})
        this.handleScroll();

    };

    render() {
        return (<div className='kit-bg-blr' style={this.state.shouldDisplay}>
                <Navbar collapseOnSelect expand="lg" bsPrefix="navbar" className="navbar-m">
                    {this.nl()}
                    {this.nr()}
                    {/*<Navbar.Toggle/>*/}
                    <button type="button" aria-label="Toggle navigation" className="navbar-toggler collapsed"><span
                        className="navbar-toggler-icon" onClick={this.showDrawer}></span></button>
                    {this.na()}
                    <Drawer className="kit-bg-blr-5" placement="right" mask={true} maskClosable={true}
                            destroyOnClose={true} drawerStyle={{background: "none"}} headerStyle={{background: "none"}}
                            footerStyle={{background: "none"}} bodyStyle={{background: "none"}}
                            maskStyle={{background: "none"}} contentWrapperStyle={{background: "none"}}
                            style={{background: "none"}} onClose={this.onClose} visible={this.state.visible}>
                        <ul className='navbar-nav'>
                            <div style={{
                                display: "flex", flexDirection: "column", alignItems: "center"
                            }}>
                                {this.state.navRight.map(nav => {
                                    d += 100;
                                    return (<li>
                                            <a className="nav-link" href={nav.href} target={nav.target} rel={nav.rel}>
                                                <Button type={"ghost"} ghost size={"middle"} icon={nav.icon}
                                                        style={{width: 115}}>{nav.value} </Button>
                                            </a>
                                        </li>)
                                })}
                                <a className="nav-link" href={this.state.resume.href}
                                   target={this.state.resume.target} rel={this.state.resume.rel}>
                                    <Button type={"ghost"} ghost size={"middle"}
                                            style={{width: 115}}>{this.state.resume.value} </Button>
                                </a>
                            </div>
                        </ul>
                    </Drawer>
                </Navbar>
            </div>);
    }

    handleScroll = () => {
        if (window.scrollY > 50) {
            if (this.props.toDisplay) {
                this.setState({
                    shouldDisplay: {
                        position: 'fixed',
                        width: "100%",
                        alignContent: 'center',
                        display: "unset",
                        justifyContent: "space-around",
                        top: "0px",
                        left: '0px',
                        zIndex: '15',
                        backgroundColor: "var(--standard-bg-cold)",
                        boxShadow: '0 10px 30px -10px var(--navy-shadow)',
                    }
                });
            } else {
                this.setState({
                    shouldDisplay: {
                        position: 'fixed',
                        width: "90%",
                        alignContent: 'center',
                        display: "none",
                        justifyContent: "space-around",
                        top: '0px',
                        left: '0px',
                        zIndex: '15',
                        backgroundColor: "var(--standard-bg-cold)",
                        boxShadow: '0 10px 30px -10px var(--navy-shadow)'
                    }
                });
            }
        } else {
            this.setState({
                shouldDisplay: {
                    position: 'fixed',
                    width: "100%",
                    alignContent: 'center',
                    display: "unset",
                    justifyContent: "space-around",
                    top: "0px",
                    left: '0px',
                    zIndex: '15',
                    backgroundColor: "var(--standard-bg)"
                }
            });
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', () => this.handleScroll());
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', () => this.handleScroll());
    }

}

export default Navi;