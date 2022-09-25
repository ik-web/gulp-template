<p align="center">
  <img src="readme-title.png" width="400" alt="Title">
</p>

<h1 align="center">
  "Gulp" template
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/-html-red" alt="html">
  <img src="https://img.shields.io/badge/-css-blue" alt="css">
  <img src="https://img.shields.io/badge/-sass/scss-violet" alt="sass">
  <img src="https://img.shields.io/badge/-javascript-yellow" alt="javascript">
  <img src="https://img.shields.io/badge/-gulp-darkred" alt="gulp"> <br>
</p>

## Description:

`Gulp` assembly for automating workflows in project development using preprocessor **css => sass** <br>
**javascript es6+** etc. Thanks to help of the `gulp-gh-pages` module, you can publish content <br>
from the `dist` folder to *GitHub-pages*

## Documentation

All paths and plugins can be changed in file => `gulp/config.js`<br>
All tasks can be changed in directory => `gulp/tasks`<br>

**Scripts:**
* `npm start` => Builds project files and starts browserSync (development mod)
* `npm run build` => Builds the project files into the *dist* directory (mod prodaction)
* `npm run deploy` => uploads content from *dist* directory to *Github pages*

**Use npm commands for install node modules:**
- `npm i` - install this template **gulp**
- `npm i gulp -D` - module to build gulp workflow
- `npm i --global gulp-cli` - module for working with gulp
- `npm i del -D` - delete `dist` directory
- `npm i browser-sync -D` - local server module
- `npm i gulp-file-include -D` - split the html file into parts using `@@include('html/html-file-name.html', {})`
- `npm i gulp-replace -D` - edit filename in paths. You also need to install the VSCode plugin **"Path Autocomplete"** and add the following configuration to `settings.json`:
```
  "path-autocomplete.pathMappings": {
      "@img": "${folder}/src/img",
      "@scss": "${folder}/src/scss",
      "@js": "${folder}/src/js"
  }
```
- `npm i gulp-plumber gulp-notify -D` - error handling plugins
- `npm i gulp-rename -D` - rename the file
- `npm i gulp-htmlmin -D` - reduce the content of HTML files
- `npm i gulp-autoprefixer -D` - adds prefixes to CSS rules for old browser versions
- `npm i gulp-group-css-media-queries -D` - gathers media queries into appropriate groups
- `npm i gulp-sass sass -D` - downloads a Sass/SCSS file and compiles it into CSS
- `npm i gulp-clean-css -D` - reduce the content of CSS files
- `npm i webpack webpack-stream -D` - work with js files as modules
- `npm i gulp-newer -D` - transfer only those source files that are newer than the corresponding target files
- `npm i gulp-imagemin -D` - reduce images .png, .jpeg, jpg, .gif
- `npm i gulp-if -D` - create mods for development and production
- `npm i gh-pages -D` - Publish the `dist` directory to gh pages on GitHub

## Developers

- [Ihor Kuchin](https://github.com/ik-web)
