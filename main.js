'use strict';

const yaml = require('js-yaml');
const fs   = require('fs');
const http = require('http');

//npm link to data module and constant filenames are assumed
const DATA_PATH = './node_modules/cvdata/';
const CV_FILE_PATH = DATA_PATH + 'cv_english.yml';
const SKILLS_FILE_PATH = DATA_PATH + 'skills.yml';
const PORT = 3000;

let cv;
let skills;

const server = http.createServer(function (request, response) {
  response.end(JSON.stringify({
    cv: cv,
    skills: skills
  }))
});

server.listen(PORT, () => {
  try {
    cv = yaml.safeLoad(fs.readFileSync(CV_FILE_PATH, 'utf8'));
    skills = yaml.safeLoad(fs.readFileSync(SKILLS_FILE_PATH, 'utf8'));
    console.log('Server started on port', PORT)
  } catch (e) {
    server.close(() => console.log(e))
  }
});
