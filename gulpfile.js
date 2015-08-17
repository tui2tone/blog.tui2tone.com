var gulp = require("gulp"),
  sass = require("gulp-sass"),
  notify = require("gulp-notify"),
  coffee = require("gulp-coffee"),
  plumber = require('gulp-plumber'),
  ngAnnotate = require('gulp-ng-annotate'),
  templateCache = require('gulp-angular-templatecache'),
  concatCss = require('gulp-concat-css');

gulp.task("watch", function() {
  gulp.watch('./src/**/*.scss',['scss']);
  gulp.watch('./src/**/*.coffee',['coffee']);
  gulp.watch('./src/**/*.html',['templates']);
});

gulp.task("scss", function() {
  return gulp.src(['./src/**/*.scss'])
    .pipe(plumber({errorHandler: notify.onError(
      {
        title: "SCSS Error: Line <%= error.line %>",
        message: "<%= error.message %>"
      })
    }))
    .pipe(sass().on('error', function(err) { console.log(err) }))
    .pipe(concatCss("./app.css"))
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
