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

const config = yaml.safeLoad(fs.readFileSync('./config.yml', 'utf-8'));

const replaceFilePath = (html) => html.replace('%dirname%', (__dirname + '/output/'));
const localizedHtmlFileName = (language, extension) => 'cv_' + language + '.' + extension;
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
    const loadData = require('./dist/loadData');
    const renderHtml = require('./dist/renderHtml');

    let sources = config.sources.map((source) => {
        let stream = vinyl(localizedHtmlFileName(source.language, 'html'));
        let files = transformPaths(source.files);
        console.log(files)
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
            './output/' + localizedHtmlFileName(source.language, 'html'),
            './output/' + localizedHtmlFileName(source.language, 'pdf')
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
