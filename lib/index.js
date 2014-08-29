'use strict';

var jshint = require('gulp-jshint');
var reporter = require('jshint-html');
var path = require('path');

// store a reference to our parameters in local variables
var gulp = null;
var config = null;

/**
 * Attaches the jsHint task to the gulp instance
 *
 * @param {Object} gulpRef The gulp instance to attach the task to
 * @param {Object} conf The configuration object
 */
function jsHintSetup(gulpRef, conf) {
  gulp = gulpRef;
  config = conf;

  gulp.task('jshint', false, ['soften'], jsHintTask);
}

/**
 * Runs the jshint task
 */
function jsHintTask() {
  var outputFile = path.resolve(config.root, 'docs/jshint/index.html');

  return gulp.src(config.src)
    .pipe(jshint())
    .pipe(jshint.reporter(reporter({outputFile: outputFile})))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
}

module.exports = jsHintSetup;
