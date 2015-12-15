/// <binding Clean='clean' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var gutil = require("gulp-util");
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var webpack = require("webpack");
var del = require('del');
var path = require('path');
var webpackConfig = require("./webpack.config.js");

var paths = {
    bootstrap: [
        "node_modules/bootstrap/dist/css/bootstrap.css",
        "node_modules/bootstrap/dist/js/bootstrap.js"
    ],
    jsx: ["app/**/*.jsx"],
    clean: ["wwwroot/app/*"],   //清理时要删除的文件
    output:{
        bootstrap:"wwwroot/css/bootstrap",
    }
};

// 默认任务（就是你在命令行输入 `gulp` 时运行）
gulp.task('default', function () {

    gulp.src(paths.bootstrap)
        .pipe(gulp.dest(paths.output.bootstrap));
});

gulp.task('clean', function (cb) {
    // 你可以用 `gulp.src` 来使用多重通配符模式
    del(paths.clean, cb);
});

// 监听文件修改
gulp.task('watch', function () {
    gulp.watch(paths.jsx, ["jsx"]);
});

gulp.task("webpack", function (callback) {
    //gutil.log("[webpack]", webpackConfig.output.path);
    // run webpack
    webpack(webpackConfig, function (err, stats) {
        if (err)
            throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            colors: true
        }));
    });
    callback();
});

//转换JSX文件为js。
gulp.task('jsx', function () {
    return gulp.src(paths.jsx)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(function (file) {
            return file.base;
        }));
});


