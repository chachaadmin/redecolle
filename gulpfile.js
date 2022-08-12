var gulp = require("gulp");
var gutil = require("gulp-util");
var ftp = require("vinyl-ftp");
var fs = require('fs');
var del = require('del');
var concat = require('gulp-concat');
var sass = require("gulp-sass")(require('sass'));
var cleanCSS = require('gulp-clean-css');
var replace = require('gulp-replace');
var shell = require('gulp-shell');
var babelify = require('babelify');
var merge = require('merge-stream');
var bro = require('gulp-bro');
var rename = require('gulp-rename');
const path = require('path');

/*
 * Loads external configurations.
 */

const config = require('./gulpfile.config');
const { doesNotMatch } = require("assert");

/**
 * 
 */
var pluginBlockName;

// Folder for blocks to be compiled in the plugin
var blocks_src_plugin = 'wp-content/plugins/chacha-gutenberg/src/';

// Template folder for new block in the plugin
var template_block_plugin = ['wp-content/plugins/chacha-gutenberg/src/_template/**/*'];

// Features folder for the custom post type, etc in the plugin
var feature_plugin = 'wp-content/plugins/chacha-gutenberg/features/';
var feature_template_plugin = [feature_plugin + '_template/**/*'];

// Compiled files for the theme (Assets)
var globs_theme = [
    'wp-content/themes/chacha/assets/css/all.css',
    'wp-content/themes/chacha/assets/js/all.js'
];

// Plugin assets folder
var globs_assets_plugin = 'wp-content/plugins/chacha-gutenberg/assets/';

// Compiled plugin blocks folder
var globs_blocks_plugin = 'wp-content/plugins/chacha-gutenberg/blocks/';

var globs_watch_theme = [
    "wp-content/themes/chacha/assets/styles/**",
    "wp-content/themes/chacha/assets/scripts/**"
];

// Files to watch to compile the blocks in the plugin
var globs_build = [
    'wp-content/plugins/chacha-gutenberg/src/**/*.js',
    'wp-content/plugins/chacha-gutenberg/src/**/*.scss'
];

// Files to watch to compile the blocks components in the plugin
var globs_jsx_build = [
    'wp-content/plugins/chacha-gutenberg/src/**/*.jsx'
];

// File to compile for all the CSS in the theme
var theme_sass_file = 'wp-content/themes/chacha/assets/styles/main.scss';
// Destination folder for the compiled css file in the theme
var theme_css_folder = 'wp-content/themes/chacha/assets/css';

// Copy the template folder with next number
gulp.task('copy:block:folder', function () {
    var name = process.argv[4];

    var dest = blocks_src_plugin + name;

    return gulp.src(template_block_plugin)
        .pipe(gulp.dest(dest));
});

// Add this folder to the index.js to allow compilation
gulp.task('add:block:folder', function (done) {
    var name = process.argv[4];

    fs.writeFile(blocks_src_plugin + name + '.js', "import './" + name + "/index.js';", () => { });
    done();
});

// Execute 2 tasks first and after, He is replacing the content to be sure all is fine.
gulp.task(
    "create:block",
    gulp.series(["copy:block:folder", "add:block:folder"], function () {
        var name = process.argv[4];

        var dest = blocks_src_plugin + name;

        return gulp.src([dest + '/edit.js', dest + '/index.js', dest + '/save.js'])
            .pipe(replace('%blockname%', name))
            .pipe(replace('%blocktitle%', name))
            .pipe(replace('%blockexample%', name))
            .pipe(gulp.dest(dest));
    })
);

// Copy the template folder with the new name
gulp.task('copy:customposttype:folder', function () {
    var name = process.argv[4];

    var dest = feature_plugin + name;

    return gulp.src(feature_template_plugin)
        .pipe(rename('class.' + name + '.php'))
        .pipe(gulp.dest(dest));
});

// Execute 2 tasks first and after, He is replacing the content to be sure all is fine.
gulp.task(
    "create:customposttype",
    gulp.series(["copy:customposttype:folder"], function () {
        var name = process.argv[4];

        var dest = feature_plugin + name;

        return gulp.src([dest + '/class.' + name + '.php'])
            .pipe(replace('_TEMPLATE', name.toUpperCase()))
            .pipe(replace('_template', name))
            .pipe(gulp.dest(dest));
    })
);

// Compile scss files in sass folder + concat them all + minify it in one file.
gulp.task("sass", function (err) {
    return gulp.src(theme_sass_file)
        .pipe(sass())
        .pipe(concat('all.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest(theme_css_folder));
});

// Clean the theme
gulp.task('clean_theme', () => {
    return del(globs_theme, { force: true });
});

// Clean the plugin
gulp.task('clean_plugin', () => {
    return del(globs_blocks_plugin + pluginBlockName, { force: true });
});

// Build the plugin
gulp.task('compile', () => {

    return gulp
        .src('*.js', { read: false })
        .pipe(shell('wp-scripts build ' + blocks_src_plugin + pluginBlockName + '.js --output-path=' + globs_blocks_plugin + pluginBlockName));
});

// Send the files for the plugin
gulp.task("ftp_plugin", function () {

    var settings = JSON.parse(fs.readFileSync('environment-config.json', 'utf8'));

    var conn = ftp.create({
        host: settings.ftp['host'], //The domain or subdomain
        user: settings.ftp['user'], //The user
        pass: settings.ftp['pass'], // The password
        port: settings.ftp['port'], // The port
        parallel: 1,
        log: gutil.log
    });

    return gulp.src(globs_blocks_plugin + pluginBlockName + '/**', { base: ".", buffer: false, allowEmpty: true })
        //.pipe( conn.newerOrDifferentSize( settings.ftp[ 'folder' ] ) )
        .pipe(conn.dest(settings.ftp['folder']));
});

// Send files for the theme
gulp.task("ftp_theme", function () {

    var settings = JSON.parse(fs.readFileSync('environment-config.json', 'utf8'));

    var conn = ftp.create({
        host: settings.ftp['host'], //The domain or subdomain
        user: settings.ftp['user'], //The user
        pass: settings.ftp['pass'], // The password
        port: settings.ftp['port'], // The port
        parallel: 1,
        log: gutil.log
    });

    return gulp.src(globs_theme, { base: ".", buffer: false, allowEmpty: true })
        //.pipe( conn.newerOrDifferentSize( settings.ftp[ 'folder' ] ) )
        .pipe(conn.dest(settings.ftp['folder']));
});

//------------------------------------------------------------------------------
// Scripts
//------------------------------------------------------------------------------

gulp.task('scripts', function () {

    const build = () => {

        let options = {
            transform: [
                babelify.configure({
                    presets: [
                        '@babel/preset-env'
                    ]
                })
            ]
        };

        if (config.prod) {
            options.transform.push([
                'uglifyify', {
                    global: true
                }
            ]);
        }

        return bro(options);
    }

    const write = (dst) => {
        return gulp.dest(dst);
    }

    let merged = merge();

    config.files.scripts.forEach(file => {

        let { src, dst } = file;

        merged.add(
            gulp.src(src)
                .pipe(build())
                .pipe(rename('all.js'))
                .pipe(write(dst))
        );

    });

    return merged;

});

// build all the JavaScript things
gulp.task('build-script', function () {

    const build = () => {

        let options = {
            transform: [
                babelify.configure({
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ]
                })
            ]
        };

        if (config.prod) {
            options.transform.push([
                'uglifyify', {
                    global: true
                }
            ]);
        }

        return bro(options);
    }

    const write = (dst) => {
        return gulp.dest(dst);
    }

    let merged = merge();

    [{
        src: blocks_src_plugin + pluginBlockName + '/components.jsx',
        dst: globs_assets_plugin + 'js/' + pluginBlockName
    }].forEach(file => {

        let { src, dst } = file;

        let filePath = __dirname + path.sep + src;
        fs.access(filePath, (err) => {
            if (!err) {
                merged.add(
                    gulp.src(filePath)
                        .pipe(build())
                        .pipe(rename('components.js'))
                        .pipe(write(dst))
                );
            }
        });

    });

    return merged;
});

// Send the files for the plugin
gulp.task("ftp_plugin_jsx", function () {

    var settings = JSON.parse(fs.readFileSync('environment-config.json', 'utf8'));

    var conn = ftp.create({
        host: settings.ftp['host'], //The domain or subdomain
        user: settings.ftp['user'], //The user
        pass: settings.ftp['pass'], // The password
        port: settings.ftp['port'], // The port
        parallel: 1,
        log: gutil.log
    });

    return gulp.src(globs_assets_plugin + 'js/' + pluginBlockName + '/**', { base: ".", buffer: false, allowEmpty: true })
        //.pipe( conn.newerOrDifferentSize( settings.ftp[ 'folder' ] ) )
        .pipe(conn.dest(settings.ftp['folder']));
});

// watch for sass file change and compile on save for theme.
gulp.task("theme:watch", gulp.series(["clean_theme", "sass", "scripts", "ftp_theme"], function () {
    gulp.watch(globs_watch_theme, gulp.series(["clean_theme", "sass", "scripts", "ftp_theme"]));
})
);

// Watch the files in question to be clean, build and send for the plugin
gulp.task("plugin:watch", function () {
    var watcher = gulp.watch(globs_build, { ignoreInitial: false });
    watcher.on('change', function (filePath) {

        var pathArr = filePath.split(path.sep);
        pluginBlockName = pathArr[4];
        runTasks = gulp.series(["clean_plugin", "compile", "ftp_plugin"]);
        runTasks();
    });
});

// Watch the files in question to be clean, build and send for the plugin
gulp.task("plugin:jsx:watch", function () {
    var watcher = gulp.watch(globs_jsx_build, { ignoreInitial: false });
    watcher.on('change', function (filePath) {

        var pathArr = filePath.split(path.sep);
        pluginBlockName = pathArr[4];
        runTasks = gulp.series(["build-script", "ftp_plugin_jsx"]);
        runTasks();
    });
});

// Watch SASS and JS files for changes and compile them (Theme and plugin).
gulp.task("all:watch", gulp.parallel(["theme:watch", "plugin:watch"]));

gulp.task("default", gulp.series(["all:watch"]));