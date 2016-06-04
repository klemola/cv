'use strict';

import React from 'react';
import Radium from '../utils/ConfiguredRadium';

const style = {
    display: 'flex'
};

const Row = ({children}) => <div style={style}>{children}</div>;

export default Radium(Row);
