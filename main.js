'use strict';

let yaml = require('js-yaml');
let fs   = require('fs');

//npm link to data module and constant filenames are assumed
const dataPath = './node_modules/cvdata/';
const cvFilePath = dataPath + 'cv_english.yml';
const skillsFilePath = dataPath + 'skills.yml';

let cv;
let skills;

try {
  cv = yaml.safeLoad(fs.readFileSync(cvFilePath, 'utf8'))
  skills = yaml.safeLoad(fs.readFileSync(skillsFilePath, 'utf8'))
} catch (e) {
  console.log("error", e);
}

console.log(Object.keys(cv));
console.log(Object.keys(skills));
