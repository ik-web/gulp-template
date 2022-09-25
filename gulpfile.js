import gulp from "gulp";
import { path, plugins, tasks } from "./gulp/config.js";

global.gulpTemplate = {
  isDev: !process.argv.includes('--build'),
  isBuild: process.argv.includes('--build'),
  gulp,
  path,
  plugins
}

const watcher = () => {
  gulp.watch(path.watch.html, tasks.html);
  gulp.watch(path.watch.scss, tasks.scss);
  gulp.watch(path.watch.js, tasks.js);
  gulp.watch(path.watch.img, tasks.img);
}

const mainTasks = gulp.parallel(
  tasks.html,
  tasks.scss,
  tasks.js,
  tasks.img,
  tasks.fonts
);

export const build = gulp.series(tasks.reset, mainTasks);
export const dev = gulp.series(
  tasks.reset,
  mainTasks,
  gulp.parallel(watcher, tasks.server)
);
  
gulp.task('default', dev);
