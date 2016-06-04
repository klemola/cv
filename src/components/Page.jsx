'use strict';

import React from 'react';
import Radium from '../utils/ConfiguredRadium';

console.log(Radium)

const Page = ({children, noPageBreak}) => {
    const style = {
        pageBreakAfter: noPageBreak
            ? 'none'
            : 'always'
    };
    return <div style={style}>{children}</div>
};

export default Radium(Page);
