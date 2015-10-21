var gulp = require("gulp"),
  sass = require("gulp-sass"),
  notify = require("gulp-notify"),
  coffee = require("gulp-coffee"),
  plumber = require('gulp-plumber'),
  ngAnnotate = require('gulp-ng-annotate'),
  templateCache = require('gulp-angular-templatecache'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  minifyCss = require('gulp-minify-css'),
  runSequence = require('run-sequence');

gulp.task("watch", function() {
  gulp.watch('./src/**/*.scss',['scss']);
  gulp.watch('./src/**/*.coffee',['coffee']);
  gulp.watch('./src/**/*.html',['templates']);
});

gulp.task('compile',['scss','coffee','templates']);

gulp.task("scss", function() {
  return gulp.src(['./src/**/*.scss'])
    .pipe(plumber({errorHandler: notify.onError(
      {
        title: "SCSS Error: Line <%= error.line %>",
        message: "<%= error.message %>"
      })
    }))
    .pipe(sass().on('error', function(err) { console.log(err) }))
    .pipe(concat("./app.css"))
    .pipe(gulp.dest('./app/'))
});

gulp.task("coffee", function() {
  return gulp.src('./src/**/*.coffee')
    .pipe(plumber({errorHandler: notify.onError(
      {
        title: "Coffee Error: Line <%= error.location.first_line %>",
        message: "<%= error.name %>:<%= error.message %>"
      })}))
    .pipe(coffee({bare: true}))
    .pipe(ngAnnotate())
    .pipe(gulp.dest('./app/'))
});


gulp.task("templates", function() {
  return gulp.src('./src/**/*.html')
    .pipe(templateCache({module: "app"}))
    .pipe(gulp.dest('./app/'))
});

gulp.task("build",function() {

  // fonts
  gulp.src([
    './bower_components/ionicons/fonts/*'
  ]).pipe(gulp.dest('dist/fonts'));

  // vendor.css
  gulp.src([
    './bower_components/bootstrap/dist/css/bootstrap.min.css',
    './bower_components/animate.css/animate.css',
    './bower_components/ionicons/css/ionicons.min.css',
    './bower_components/angular-material/angular-material.css',
    './bower_components/highlightjs/styles/default.css',
    './bower_components/highlightjs/styles/tomorrow.css'
  ]).pipe(minifyCss({compatibility: 'ie8'})).pipe(concat('vendor.css')).pipe(gulp.dest('dist/css'));

  // app.css
  gulp.src([
    './app/app.css'
  ]).pipe(minifyCss({compatibility: 'ie8'})).pipe(concat('app.css')).pipe(gulp.dest('dist/css'));

  // vendor.js
  gulp.src([
    './bower_components/jquery/dist/jquery.min.js',
    './bower_components/moment/moment.js',
    './bower_components/highlightjs/highlight.pack.js',
    './bower_components/bootstrap/dist/js/bootstrap.min.js',
    './bower_components/angular/angular.min.js',
    './bower_components/angular-ui-router/release/angular-ui-router.min.js',
    './bower_components/angular-animate/angular-animate.min.js',
    './bower_components/angular-sanitize/angular-sanitize.min.js',
    './bower_components/angular-aria/angular-aria.min.js',
    './bower_components/angular-cookies/angular-cookies.min.js',
    './bower_components/angular-bootstrap/ui-bootstrap.min.js',
    './bower_components/ngInfiniteScroll/build/ng-infinite-scroll.min.js',
    './bower_components/angular-scroll/angular-scroll.min.js',
    './bower_components/angular-material/angular-material.min.js',
    './bower_components/angularjs-socialshare/dist/angular-socialshare.min.js'
  ]).pipe(uglify()).pipe(concat('vendor.js')).pipe(gulp.dest('dist'));

  // app.js
  gulp.src([
    './app/*.js',
    './app/services/*.js',
    './app/**/*.js'
  ]).pipe(uglify()).pipe(concat('app.js')).pipe(gulp.dest('dist'));
});
