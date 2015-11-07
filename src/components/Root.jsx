'use strict';

import React from 'react'
import Radium, { Style } from 'radium'
import globalStyles from '../constants/globalStyles'
import Page from './Page'
import General from './General'
import Work from './Work'
import Education from './Education'
import Projects from './Projects'
import Publications from './Publications'
import Skills from './Skills'

const style = {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '20px',
    background: '#fff'
};

const Root = (props) => {
    const {general, work, education, projects, publications} = props.cv;
    return (
        <div style={style}>
            <Style rules={globalStyles}/>
            <Page>
                <General data={general}/>
                <Work data={work}/>
            </Page>
            <Page>
                <Skills data={props.skills}/>
            </Page>
            <Page>
                <Education data={education}/>
                <Projects data={projects}/>
            </Page>
            <Page noPageBreak={true}>
                <Publications data={publications}/>
            </Page>
        </div>
    )
};

export default Radium(Root);
