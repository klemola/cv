/* eslint-disable global-require */

const gulp = require('gulp');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const vinyl = require('vinyl-source-stream');
const mergeStream = require('merge-stream');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const htmlAutoprefixer = require('html-autoprefixer');
const yaml = require('js-yaml');
const fs = require('fs');
const moment = require('moment');

const config = yaml.safeLoad(fs.readFileSync('./config.yml', 'utf-8'));

function replaceFilePath(html) {
  return html.replace('%dirname%', `${__dirname}/output/`);
}

function toFileName(language, extension) {
  const normalizedName = config.name.split(' ').map(x => x.toLowerCase()).join('_');
  const now = moment().format('DD_MM_YYYY');
  const fileName = [normalizedName, 'cv', language, now].join('_');

  return `${fileName}.${extension}`;
}

function transformPaths(files) {
  const transformed = {};
  Object.keys(files).forEach((key) => {
    transformed[key] = [config.dataPath, files[key]].join('/');
  });

  return transformed;
}

gulp.task('scripts', ['clean:scripts'], () =>
  gulp.src(['src/**/*.js', 'src/**/*.jsx'])
    .pipe(babel())
    .pipe(gulp.dest('dist'))
);

gulp.task('images', ['clean:images'], () =>
  gulp.src('src/images/*')
    .pipe(gulp.dest('output'))
);

gulp.task('clean:scripts', () =>
  gulp.src('dist', { read: false })
    .pipe(clean({ force: true }))
);

gulp.task('clean:images', () =>
  gulp.src(['output/*.jpg', 'output/*.jpeg', 'output/*.png'], { read: false })
    .pipe(clean({ force: true }))
);

gulp.task('clean:output', () =>
  gulp.src(['output/*.html', 'output/*.pdf'], { read: false })
    .pipe(clean({ force: true }))
);

gulp.task('clean:cache', () =>
  Object.keys(require.cache).forEach((key) => {
    if (key.indexOf('cv/dist') !== -1) {
      delete require.cache[key];
    }
  })
);

gulp.task('html', ['images', 'scripts'], () => {
  const loadData = require('./dist/loadData');
  const renderHtml = require('./dist/renderHtml');

  const sources = config.sources.map((source) => {
    const stream = vinyl(toFileName(source.language, 'html'));
    const files = transformPaths(source.files);
    const data = loadData(files.cvFilePath, files.skillsFilePath, files.i18nFilePath);
    const html = renderHtml(data.cv, data.skills, data.i18n);

    stream.end(htmlAutoprefixer.process(replaceFilePath(html)));
    return stream.pipe(gulp.dest('output'));
  });

  return mergeStream.apply(null, sources);
});

gulp.task('build', ['clean:output', 'html'], () => {
  const htmlToPdf = require('./dist/htmlToPdf');
  config.sources.forEach((source) => {
    htmlToPdf(
        `./output/${toFileName(source.language, 'html')}`,
        `./output/${toFileName(source.language, 'pdf')}`
    );
  });
});

gulp.task('serve', ['html'], () => {
  browserSync({
    notify: false,
    open: false,
    port: 9000,
    ghostMode: false,
    server: {
      baseDir: ['output'],
      directory: true,
    },
  });
  gulp.watch(['src/**/*.js', 'src/**/*.jsx'], ['clean:cache', 'html']);
  gulp.watch(['output/*.html'], reload);
});

gulp.task('default', ['build']);
