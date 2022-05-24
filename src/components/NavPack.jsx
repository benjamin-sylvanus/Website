import React, {Component} from 'react';
import NavComponent from './NavComponent';
import {CSSTransition} from 'react-transition-group';

class NavPack extends Component {
    render() {
        const {elements, formation, delay} = this.props;
        let d = delay;
        return (
            <ul className={formation}>
                {elements.map(nav => {
                        d += 100
                        return (
                            <CSSTransition in={this} appear={true} timeout={1000} className="nav-link"
                                           style={{transitionDelay: d + "ms"}}>
                                <li>
                                    <NavComponent
                                        value={nav.value}
                                        href={nav.href}>
                                    </NavComponent>
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


export default NavPack;