'use strict';

import React from 'react';
import Radium from 'radium';
import General from './General'
import Work from './Work'

const style = {
    color: 'red'
};

class Root extends React.Component {
    render() {
        const {general, work, education, projects, publications} = this.props.cv;
        return (
            <div>
                <General data={general}/>
                <Work data={work}/>
            </div>
        )
    }
}

export default Radium(Root);
