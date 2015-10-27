'use strict';

require("babel/register");
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Root = require('./components/Root');

module.exports = function () {
    return ReactDOMServer.renderToString(React.createElement(Root));
};

