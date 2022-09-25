import fileinclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';

export const html = () => {
  return gulpTemplate.gulp.src(gulpTemplate.path.src.html)
    .pipe(gulpTemplate.plugins.plumber(gulpTemplate.plugins.notify.onError({
        title: 'HTML',
        message: 'Error: <%= error.message %>'
      }))
    )
    .pipe(fileinclude())
    .pipe(gulpTemplate.plugins.replace('@img/', 'img/'))
    .pipe(htmlmin({ collapseWhitespace: gulpTemplate.isBuild }))
    .pipe(gulpTemplate.gulp.dest(gulpTemplate.path.build.html))
    .pipe(gulpTemplate.plugins.browserSync.stream())
}
