'use strict';

import yaml from 'js-yaml';
import fs from 'fs';

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
