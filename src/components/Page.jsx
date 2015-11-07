'use strict';

import React from 'react';
import Radium from 'radium';

const Page = ({children, noPageBreak}) => {
    const style = {
        pageBreakAfter: noPageBreak ? 'none' : 'always'
    };
    return <div style={style}>{children}</div>
};

export default Radium(Page);
