'use strict';

import React from 'react';
import Radium, { Style } from 'radium';
import globalStyles from '../constants/globalStyles'
import General from './General'
import Work from './Work'

const style = {
    maxWidth: '760px',
    margin: '20px auto',
    padding: '20px',
    background: '#fff',
    borderRadius: '6px'
};

class Root extends React.Component {
    render() {
        const {general, work, education, projects, publications} = this.props.cv;
        return (
            <div style={style}>
                <Style rules={globalStyles}/>
                <General data={general}/>
                <Work data={work}/>
            </div>
        )
    }
}

export default Radium(Root);
