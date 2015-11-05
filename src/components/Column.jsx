'use strict';

import React from 'react';
import Radium from 'radium';

const Column = ({children, width, textAlign}) => {
    let style = {
        flex: !width ? 1 : 'none',
        width: width,
        textAlign: textAlign ? textAlign : 'left'
    };

    return <div style={style}>{children}</div>;
};

export default Radium(Column);
