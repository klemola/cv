'use strict';

const yaml = require('js-yaml');
const fs   = require('fs');

module.exports = (cvFilePath, skillsFilePath) => {
    try {
        return {
            cv: yaml.safeLoad(fs.readFileSync(cvFilePath, 'utf-8')),
            skills: yaml.safeLoad(fs.readFileSync(skillsFilePath, 'utf-8'))
        };
    } catch (e) {
        console.log(e);
    }
};
