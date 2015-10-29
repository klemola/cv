'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const vinyl = require('vinyl-source-stream');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

//npm link to data module and constant filenames are assumed
const DATA_PATH = './node_modules/cvdata/';
const CV_FILE_PATH = DATA_PATH + 'cv_english.yml';
const SKILLS_FILE_PATH = DATA_PATH + 'skills.yml';

gulp.task('scripts', ['clean:scripts'], () => {
    return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('clean:scripts', () => {
    return gulp.src('dist', {read: false})
        .pipe(clean({force: true}));
});

gulp.task('clean:output', () => {
    return gulp.src('output', {read: false})
        .pipe(clean({force: true}));
});

gulp.task('clean:cache', () => {
    Object.keys(require.cache).forEach(function(key) {
        if (key.indexOf('cv/dist') !== -1) {
            delete require.cache[key]
        }
    });
});

gulp.task('html', ['clean:output', 'scripts'], () => {
    let loadData = require('./dist/loadData');
    let renderHtml = require('./dist/renderHtml');
    let stream = vinyl('cv.html');

    stream.end(renderHtml(loadData(CV_FILE_PATH, SKILLS_FILE_PATH)));

    return stream.pipe(gulp.dest('output'));
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
