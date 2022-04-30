import React from "react";
import {CSSTransition} from "react-transition-group";
export default class Coldflex extends React.Component {
    render() {

        return (
            <CSSTransition className="col d-flex align-items-start" in={this} appear={true} timeout={{appear: this.props.delay}}>
            <div className="col d-flex align-items-start">
                <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                    <svg className="bi" width="1em" height="1em">
                    </svg>
                </div>
                <div>
                    <h2>Featured title</h2>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with
                        another
                        sentence and probably just keep going until we run out of words.</p>
                    <a href="#" className="btn btn-primary">
                        Primary button
                    </a>
                </div>
            </div>
            </CSSTransition>
        );
    }
}