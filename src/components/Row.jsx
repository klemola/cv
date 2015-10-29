'use strict';

import React from 'react';
import Radium from 'radium';

const style = {
    display: 'flex'
};

class Column extends React.Component {
    render() {
        return (
            <div style={style}>{this.props.children}</div>
        )
    }
}

export default Radium(Column);
