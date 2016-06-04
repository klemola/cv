# CV generator

## About

YML files to HTML and PDF CV using React and Node.js

Requires a custom `config.yml` file (or symbolic link) in the root folder

Example `config.yml`

```yml
name: Eric Example
dataPath: /Users/eric/cv_data
sources:
  - language: fi
    files:
      cvFilePath: cv_FI.yml
      skillsFilePath: skills.yml
      i18nFilePath: i18n_FI.yml
  - language: en
    files:
      cvFilePath: cv_EN.yml
      skillsFilePath: skills.yml
      i18nFilePath: i18n_EN.yml

```

## Usage

- YML to HTML and PDF: `gulp` or `gulp build`
- Dev server with live reload: `gulp serve`

License: MIT
