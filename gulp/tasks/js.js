import webpack from 'webpack-stream';

export const js = () => {
  return gulpTemplate
  .gulp.src(gulpTemplate.path.src.js, { sourcemaps:  gulpTemplate.isDev })
  .pipe(gulpTemplate.plugins.plumber(gulpTemplate.plugins.notify.onError({
      title: 'Javascript',
      message: 'Error: <%= error.message %>'
    }))
  )
  .pipe(webpack({
    mode: gulpTemplate.isBuild ? 'production' : 'development',
    output: {
      filename: 'app.min.js'
    }
  }))
  .pipe(gulpTemplate.gulp.dest(gulpTemplate.path.build.js))
  .pipe(gulpTemplate.plugins.browserSync.stream())
};
