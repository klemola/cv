'use strict';

import React from 'react';
import Radium, { Style } from 'radium';
import globalStyles from '../constants/globalStyles'
import General from './General'
import Work from './Work'
import Education from './Education'
import Projects from './Projects'
import Publications from './Publications';
import Skills from './Skills';

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
            <Projects data={projects}/>
            <Publications data={publications}/>
            <Skills data={props.skills}/>
        </div>
    )
};

export default Radium(Root);
