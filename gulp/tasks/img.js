import imagemin from 'gulp-imagemin';

export const img = () => {
  return gulpTemplate.gulp.src(gulpTemplate.path.src.img)
    .pipe(gulpTemplate.plugins.newer(gulpTemplate.path.build.img))
    .pipe(gulpTemplate.plugins.if(
      gulpTemplate.isBuild,
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3 // from 0 to 7
      })
    ))
    .pipe(gulpTemplate.gulp.dest(gulpTemplate.path.build.img))
    .pipe(gulpTemplate.gulp.src(gulpTemplate.path.src.svg))
    .pipe(gulpTemplate.gulp.dest(gulpTemplate.path.build.img))
    .pipe(gulpTemplate.plugins.browserSync.stream())
}
