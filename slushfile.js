'use strict';

var gulp = require('gulp')
  , gutil = require('gulp-util')
  , install = require('gulp-install')
  , conflict = require('gulp-conflict')
  , template = require('gulp-template')
  , __ = require('underscore.string')
  , semver = require('semver')
  , inquirer = require('inquirer')
  , helpers = require('./helpers');

gulp.task('default', function (done) {

  var questions = helpers.questions(gulp.args.join(' '));

  inquirer.prompt(questions, function (answers) {
    // fix name and version
    answers.name = __.slugify(answers.name);
    if (!answers.name) {
      answers.name = gulp.args.join(' ');
    }
    answers.version = semver.valid(answers.version) ? answers.version : '0.1.0';

    gulp.src(helpers.globs(answers), {dot: true})
      .pipe(template(answers))
      .pipe(conflict('./'))
      .pipe(gulp.dest('./'))
      .pipe(install())
      .on('end', function () {
        gutil.log('All done...');
      })
      .on('error', function () {
        gutil.log();
      });
  });
});
