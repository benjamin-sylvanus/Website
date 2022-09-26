import {withBreakpoints} from 'react-breakpoints'
import React from "react";



class Breaker extends React.Component {
    render() {
        const { breakpoints, currentBreakpoint } = this.props;
        return (
            <div>
                {breakpoints[currentBreakpoint] >= breakpoints.mobile ? (
                   <div>b</div>
                ) : (
                    <div>{breakpoints[currentBreakpoint]}</div>
                )}
            </div>
        )
    }
}


export default withBreakpoints(Breaker);