import React, {Component} from 'react';
import NavComponent from './NavComponent';
import {CSSTransition} from 'react-transition-group';

class NavBar extends Component {
    render() {
        const {elements, formation, doLoad, time} = this.props;
        let d = 100
        if(doLoad) {
            return (
                    <ul className={formation}>
                        {elements.map(nav => {
                            d+=100
                            return (
                                <CSSTransition in={this} appear={true} timeout={10000} className="nav-link" style={{transitionDelay: d+"ms"}}>
                                <li>

                                    <NavComponent
                                        key={nav.id}
                                        value={nav.value}
                                        href={nav.href}
                                        nav={nav} delay={nav.delay}></NavComponent>
                            </li>
                            </CSSTransition>

                            )
                        }
                        )
                        }
                    </ul>
            )
        }
                    }

}



export default NavBar;