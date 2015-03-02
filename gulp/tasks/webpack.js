var path = require('path'),
  gulp = require('gulp'),
  webpack = require('gulp-webpack-build'),
  CONFIG_FILENAME = webpack.config.CONFIG_FILENAME,
  config = require('../config'),
  webpackOptions = {
    debug: true,
    devtool: '#source-map'
  },
  webpackConfig = {
    useMemoryFs: true,
    progress: true
  };

gulp.task('webpack', [], function() {
  return gulp.src(CONFIG_FILENAME, {base: path.resolve(config.src)})
    .pipe(webpack.configure(webpackConfig))
    .pipe(webpack.overrides(webpackOptions))
    .pipe(webpack.compile())
    .pipe(webpack.format({
      version: false,
      timings: true
    }))
    .pipe(webpack.failAfter({
      errors: true,
      warnings: true
    }))
    .pipe(gulp.dest(config.dest));
});


//TODO: errors when using webpack.optimize.UglifyJsPlugin
gulp.task('webpack.min', [], function() {
  return gulp.src('webpack.config.min.js', {base: path.resolve(config.src)})
    .pipe(webpack.configure(webpackConfig))
    .pipe(webpack.overrides(webpackOptions))
    .pipe(webpack.compile())
    .pipe(webpack.format({
      version: false,
      timings: true
    }))
    .pipe(webpack.failAfter({
      errors: true,
      warnings: true
    }))
    .pipe(gulp.dest(config.dest));
});