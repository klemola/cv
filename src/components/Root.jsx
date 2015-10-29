'use strict';

import React from 'react';
import Radium from 'radium';

const style = {
    color: 'red'
};

class Root extends React.Component {
    render() {
        const {general, work, education, projects, publications} = this.props.cv;
        return React.createElement('p', {
            style: style
        }, 'Test')
    }
}

module.exports = Radium(Root);
