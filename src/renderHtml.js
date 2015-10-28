'use strict';

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Root = require('./components/Root');

module.exports = function (cv, skills) {
    return ReactDOMServer.renderToString(React.createElement(Root, {
        cv: cv,
        skills: skills
    }));
};
