const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss')

function buildStyles() {
    return src('darksight/**/*.scss') /* change darksight to sass for local */
    .pipe(sass())
    .pipe(purgecss({ content: ['*.html'] }))
    .pipe(dest('css'))
}

function watchTask() {
    watch(['darksight/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)