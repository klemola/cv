'use strict';

import yaml from 'js-yaml';
import fs from 'fs';

export default (cvFilePath, skillsFilePath, i18nFilePath) => {
    try {
        return {
            cv: yaml.safeLoad(fs.readFileSync(cvFilePath, 'utf-8')),
            skills: yaml.safeLoad(fs.readFileSync(skillsFilePath, 'utf-8')),
            i18n: yaml.safeLoad(fs.readFileSync(i18nFilePath, 'utf-8'))
        };
    } catch (e) {
        console.log(e);
    }
};
