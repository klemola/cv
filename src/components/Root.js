'use strict';

const React = require('react');
const Radium = require('radium');

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
