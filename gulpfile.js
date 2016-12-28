/* gulpfile.js */
'use strict';

var gulp = require('gulp'),
    packageJson = require('./package.json'),
    appName = packageJson.name || 'app',
    appVersion = packageJson.version || '0.0.0',
    del = require('del'),
    zip = require('gulp-zip');
 
var paths = {
  build: 'build/app', // Build directory
  dist: 'dist', // Distribution directory
  zipfile: appName + '.zip', // Zip file name
  files: ['app/**', '!app/**/*Test.js', '!build/**']
};

// Clean the output directory
gulp.task('clean', function() {
  return del([paths.build]);
});

gulp.task('copy', ['clean'], function() {
  return gulp.src(paths.files)
    .pipe(gulp.dest(paths.build));
});

gulp.task('zip', ['copy'], function() {
  return gulp.src(paths.build+'/**')
    .pipe(zip(paths.zipfile))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('build', ['clean', 'copy', 'zip']);
