export const server = (done) => {
  gulpTemplate.plugins.browserSync.init({
    server: {
      baseDir: `${gulpTemplate.path.build.html}`
    },
    notify: false,
    port: 3000,
  });
}
