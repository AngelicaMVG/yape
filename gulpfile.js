var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var obfuscate = require('gulp-obfuscate');
var filesExist = require('file-exist');

var ruta = {
  source: './src/',
  dest: './public',
};

var paths = {
  html: "**/*.html",
  js: "assets/js/*.js",
  sass: "assets/scss/*.scss",
  img: "assets/img/icons/*.png"
};

var sources = {
  html: ruta.source + paths.html,
  sass: ruta.source + paths.sass,
  js: ruta.source + paths.js,
  img: ruta.source +paths.img
};

gulp.task('html', () => {
  gulp.src(sources.html)
    .pipe(gulp.dest(ruta.dest));
});

gulp.task('img', ()=> {
  gulp.src(sources.img)
  .pipe(gulp.dest(ruta.dest + "/assets/img/icons"));
});

gulp.task("sass", function() {
  gulp.src(sources.sass)
    .pipe(sass({
      outputStyle: "compressed"
    }).on("error", sass.logError))
    .pipe(gulp.dest(ruta.dest + "/assets/css"));
});

gulp.task("js", function() {
  gulp.src(sources.js)
    .pipe(concat('bundle.js'))
    .pipe(uglify())

    .pipe(gulp.dest(ruta.dest + '/assets/js'));
});

gulp.task("sass-watch", ["sass"], function(done) {
  browserSync.reload();
  done();
});

gulp.task("js-watch", ["js"], function(done) {
  browserSync.reload();
  done()
});


gulp.task("html-watch", ["html"], function(done) {
  browserSync.reload();
  done();
});

/*Al llamarse default basta con correr "gulp" en la terminal
En lugar de tener que escribir "gulp serve"*/
gulp.task("default", function() {
  browserSync.init({
    server: {
      baseDir: ruta.dest
    }
  });
  gulp.watch(sources.html, ["html-watch"]);
  gulp.watch(ruta.source + paths.sass,['sass-watch']);
  gulp.watch(ruta.source + paths.js, ["js-watch"] );
});
