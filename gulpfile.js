'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const vinyl = require('vinyl-source-stream');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const htmlAutoprefixer = require('html-autoprefixer');

//npm link to data module and constant filenames are assumed
const DATA_PATH = './node_modules/cvdata/';
const CV_FILE_PATH = DATA_PATH + 'cv_EN.yml';
const SKILLS_FILE_PATH = DATA_PATH + 'skills.yml';
const I18N_FILE_PATH = DATA_PATH + 'i18n_EN.yml';

const replaceFilePath = (html) => {
    return html.replace('%dirname%', (__dirname + '/output/'))
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

gulp.task('clean:html', () => {
    return gulp.src('output/*.html', {read: false})
        .pipe(clean({force: true}));
});

gulp.task('clean:cache', () => {
    return Object.keys(require.cache).forEach(function(key) {
        if (key.indexOf('cv/dist') !== -1) {
            delete require.cache[key]
        }
    });
});

gulp.task('html', ['clean:html', 'images', 'scripts'], () => {
    let loadData = require('./dist/loadData');
    let renderHtml = require('./dist/renderHtml');
    let stream = vinyl('cv.html');

    let data = loadData(CV_FILE_PATH, SKILLS_FILE_PATH, I18N_FILE_PATH);
    let html = renderHtml(data.cv, data.skills, data.i18n);
    stream.end(htmlAutoprefixer.process(replaceFilePath(html)));

    return stream.pipe(gulp.dest('output'));
});

gulp.task('pdf', ['html'], () => {
    let htmlToPdf = require('./dist/htmlToPdf');
    htmlToPdf('./output/cv.html', './output/cv.pdf');
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
