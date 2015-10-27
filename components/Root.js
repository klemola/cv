'use strict';

const React = require('react');
const Radium = require('radium');

const style = {
    color: 'orange'
};

class Root extends React.Component {
    render() {
        return React.createElement('p', {
            style: style
        }, 'Test')
    }
}

module.exports = Radium(Root);
