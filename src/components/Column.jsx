'use strict';

import React from 'react';
import Radium from 'radium';

const Column = ({children, width}) => {
    let style = {
        flex: !width ? 1 : 'none',
        width: width
    };

    return <div style={style}>{children}</div>;
};

export default Radium(Column);
