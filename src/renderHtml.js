'use strict';

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Root = require('./components/Root');
const Template = (content) => {
    return `
     <!doctype html>
     <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>CV</title>
            <META HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE">
            <META HTTP-EQUIV="EXPIRES" CONTENT="Mon, 22 Jul 2002 11:12:01 GMT">
        </head>
        <body>
            ${content}
        </body>
    </html>
    `;
};

module.exports = function (cv, skills) {
    let html = ReactDOMServer.renderToString(React.createElement(Root, {
        cv: cv,
        skills: skills
    }));
    return Template(html);
};
