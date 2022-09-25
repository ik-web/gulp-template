export const fonts = () => {
  return gulpTemplate.gulp.src(gulpTemplate.path.src.fonts)
    .pipe(gulpTemplate.gulp.dest(gulpTemplate.path.build.fonts))
    .pipe(gulpTemplate.plugins.browserSync.stream())
}
