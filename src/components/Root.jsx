'use strict';

import React from 'react';
import Radium, { Style } from 'radium';
import globalStyles from '../constants/globalStyles'
import General from './General'
import Work from './Work'
import Education from './Education'

const style = {
    maxWidth: '760px',
    margin: '20px auto',
    padding: '20px',
    background: '#fff',
    borderRadius: '6px'
};

const Root = (props) => {
    const {general, work, education, projects, publications} = props.cv;
    return (
        <div style={style}>
            <Style rules={globalStyles}/>
            <General data={general}/>
            <Work data={work}/>
            <Education data={education}/>
        </div>
    )
};

export default Radium(Root);
