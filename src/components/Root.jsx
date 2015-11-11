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
    return (
        <div style={style}>
            <Style rules={globalStyles}/>
            <Page>
                <General data={props.cv.general} i18n={props.i18n.general}/>
                <Work data={props.cv.work} i18n={props.i18n.work}/>
            </Page>
            <Page>
                <Skills data={props.skills} i18n={props.i18n.skills}/>
            </Page>
            <Page>
                <Education data={props.cv.education} i18n={props.i18n.education}/>
                <Projects data={props.cv.projects} i18n={props.i18n.projects}/>
            </Page>
            <Page noPageBreak={true}>
                <Publications data={props.cv.publications} i18n={props.i18n.publications}/>
            </Page>
        </div>
    )
};

export default Radium(Root);
