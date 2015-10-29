'use strict';

import React from 'react';
import Radium from 'radium';

class Column extends React.Component {
    render() {
        let style = {
            flex: !this.props.width ? 1 : 'none',
            width: this.props.width
        };
        return (
            <div style={style}>{this.props.children}</div>
        )
    }
}

export default Radium(Column);
