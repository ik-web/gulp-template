// Plugins
// ------------------------------------------------------
import replace from 'gulp-replace';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import notify  from 'gulp-notify';
import newer from 'gulp-newer';
import gulpif from 'gulp-if';

export const plugins = {
  replace,
  browserSync,
  plumber,
  notify,
  newer,
  if: gulpif
}

// Path
// ------------------------------------------------------
import { basename, resolve } from 'path';

const root = basename(resolve());
const dirDist = './dist';
const dirSrc = './src';

export const path = {
  root,
  dirDist,
  dirSrc,
  build: {
    html: dirDist,
    css: dirDist,
    js: dirDist,
    img: `${dirDist}/img/`,
    fonts: `${dirDist}/fonts/`
  },
  src: {
    html: `${dirSrc}/index.html`,
    scss: `${dirSrc}/styles/main.scss`,
    js: `${dirSrc}/scripts/app.js`,
    img: `${dirSrc}/img/**/*.{jpeg,jpg,png,gif,webp,ico}`,
    svg: `${dirSrc}/img/**/*.svg`,
    fonts: `${dirSrc}/fonts/*.*`
  },
  watch: {
    html: `${dirSrc}/**/*.html`,
    scss: `${dirSrc}/styles/**/*.scss`,
    js: `${dirDist}/scripts/**/*.js`,
    img: `${dirSrc}/img/**/*.{jpeg,jpg,png,gif,webp,svg,ico}`
  },
  clean: dirDist,
}

// Tasks
// ------------------------------------------------------
import { reset } from "./tasks/reset.js";
import { html } from "./tasks/html.js";
import { scss } from "./tasks/scss.js";
import { js } from "./tasks/js.js";
import { img } from "./tasks/img.js";
import { fonts } from "./tasks/fonts.js";
import { server } from "./tasks/server.js";

export const tasks = {
  reset,
  html,
  scss,
  js,
  img,
  fonts,
  server
}
