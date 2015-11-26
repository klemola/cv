'use strict';

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

const replaceFilePath = (html) => html.replace('%dirname%', (__dirname + '/output/'));
const nameString = () => config.name.split(' ').map(x => x.toLowerCase()).join('_');
const dateString = () => moment().format('DD_MM_YYYY');
const fileName = (language, extension) => [nameString(), 'cv', language, dateString()].join('_') + '.' + extension;
const transformPaths = (files) => {
    let transformed = {};
    Object.keys(files).forEach((key) => {
        transformed[key] = [config.dataPath, files[key]].join('/')
    });
    return transformed;
};

gulp.task('scripts', ['clean:scripts'], () => {
    return gulp.src(['src/**/*.js', 'src/**/*.jsx'])
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('images', ['clean:images'], () => {
   return gulp.src('src/images/*')
        .pipe(gulp.dest('output'));
});

gulp.task('clean:scripts', () => {
    return gulp.src('dist', {read: false})
        .pipe(clean({force: true}));
});

gulp.task('clean:images', () => {
    return gulp.src(['output/*.jpg', 'output/*.jpeg', 'output/*.png'], {read: false})
        .pipe(clean({force: true}));
});

gulp.task('clean:output', () => {
    return gulp.src(['output/*.html', 'output/*.pdf'], {read: false})
        .pipe(clean({force: true}));
});

gulp.task('clean:cache', () => {
    return Object.keys(require.cache).forEach(function(key) {
        if (key.indexOf('cv/dist') !== -1) {
            delete require.cache[key]
        }
    });
});

gulp.task('html', ['clean:output', 'images', 'scripts'], () => {
    const loadData = require('./dist/loadData');
    const renderHtml = require('./dist/renderHtml');

    let sources = config.sources.map((source) => {
        let stream = vinyl(fileName(source.language, 'html'));
        let files = transformPaths(source.files);
        let data = loadData(files.cvFilePath, files.skillsFilePath, files.i18nFilePath);
        let html = renderHtml(data.cv, data.skills, data.i18n);

        stream.end(htmlAutoprefixer.process(replaceFilePath(html)));
        return stream.pipe(gulp.dest('output'));
    });

    return mergeStream.apply(null, sources);
});

gulp.task('pdf', ['html'], () => {
    let htmlToPdf = require('./dist/htmlToPdf');
    config.sources.forEach((source) => {
        htmlToPdf(
            './output/' + fileName(source.language, 'html'),
            './output/' + fileName(source.language, 'pdf')
        );
    })
});

gulp.task('serve', ['html'], () => {
    browserSync({
        notify: false,
        open: false,
        port: 5000,
        ghostMode: false,
        server: {
            baseDir: ['output']
        }
    });
    gulp.watch(['src/**/*.js', 'src/**/*.jsx'], ['clean:cache', 'html']);
    gulp.watch(['output/cv.html'], reload);
});

gulp.task('default', ['html']);
