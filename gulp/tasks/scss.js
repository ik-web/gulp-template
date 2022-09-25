import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import ggsmq from 'gulp-group-css-media-queries';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';

const sass = gulpSass(dartSass)

export const scss = () => {
  return gulpTemplate
    .gulp.src(gulpTemplate.path.src.scss, { sourcemaps: gulpTemplate.isDev })
    .pipe(gulpTemplate.plugins.plumber(gulpTemplate.plugins.notify.onError({
        title: 'SCSS',
        message: 'Error: <%= error.message %>'
      }))
    )
    .pipe(gulpTemplate.plugins.replace('@img/', '../img/'))
    .pipe(sass())
    .pipe(gulpTemplate.plugins.if(gulpTemplate.isBuild, ggsmq()))
    .pipe(gulpTemplate.plugins.if(
      gulpTemplate.isBuild,
      autoprefixer({
        grid: true,
        overrideBrowserslist: ['last 3 versions'],
        cascade: true
      })
    ))
    .pipe(gulpTemplate.gulp.dest(gulpTemplate.path.build.css))
    .pipe(gulpTemplate.plugins.if(gulpTemplate.isBuild, cleanCSS()))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulpTemplate.gulp.dest(gulpTemplate.path.build.css))
    .pipe(gulpTemplate.plugins.browserSync.stream())
};
