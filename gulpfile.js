var gulp = require('gulp'),
    estream = require('event-stream'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    less = require('gulp-less'),
    gulpif = require('gulp-if'),
    htmlMin = require('gulp-htmlmin'),
    rename = require('gulp-rename'),
    imageMin = require('gulp-imagemin'),
    pngCrush = require('imagemin-pngcrush'),
    jsonMin = require('gulp-jsonminify'),
    gutil = require('gulp-util');
    
var env,jsSource1, jsSource2, jsSource3, lessSources, outputDir; 
    
env = process.env.NODE_ENV || 'production';  
    
if(env === 'development') {
    outputDir = '_/builds/development/';
}else {
    outputDir = '_/builds/production/';
}    
    
jsSource1 = [
    '_/components/js/jquery.js',
    '_/components/js/affix.js',
    '_/components/js/transition.js',
    '_/components/js/tooltip.js',
    '_/components/js/alert.js',
    '_/components/js/button.js'
];  

jsSource2 =[
    '_/components/js/carousel.js',
    '_/components/js/collapse.js',
    '_/components/js/dropdown.js',
    '_/components/js/modal.js',
    '_/components/js/popover.js',
    '_/components/js/scrollspy.js',
    '_/components/js/tab.js'
];

jsSource3 = [
    '_/components/js/jquery.easypiechart.min.js',
    '_/components/js/mustache.js',
    '_/components/js/jquery.cycle.all.js',
    '_/components/js/wow.js',
    '_/components/js/myscript.js'
];

lessSources = [
    '_/components/less/bootstrap.less',
    '_/components/less/animate.less',
    '_/components/less/mystyles.less'
];


gulp.task('bootstrapJS', function () {
    var js1 = gulp.src(jsSource1);
    var js2 = gulp.src(jsSource2);
    var js3 = gulp.src(jsSource3);
    
    return estream.merge(js1,js3,js2)
            .pipe(concat('bootstrap.js'))
            .on('error', gutil.log)
            .pipe(gulpif(env === 'production', uglify()))
            .pipe(gulp.dest(outputDir + 'js'))
            .pipe(connect.reload());
});

gulp.task('less', function  () {
    gulp.src(lessSources)
            .pipe(concat('bootstrap.css'))
            .pipe(less({
                compress: true
            }))
            .pipe(gulp.dest(outputDir + 'css'))
            .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch([jsSource3], ['bootstrapJS']);
    gulp.watch([lessSources], ['less']);
    gulp.watch(['index.html'], ['html']);
    gulp.watch(['images/**/*.*'], ['moveImages']);
});

gulp.task('connect', function () {
    connect.server({
        root: outputDir,
        livereload: true
    });
});

gulp.task('html', function () {
   gulp.src('index.html', { base: process.cwd() })
           .pipe(gulpif(env === 'production', htmlMin({ collapseWhitespace: true })))
           .pipe(gulpif(env === 'production', rename({
               basename :    'index',
               extname  :    '.php'
            })))
           .pipe(gulp.dest(outputDir))
           .pipe(connect.reload());
});

gulp.task('json', function () {
   gulp.src('data.json')
           .pipe(gulpif(env === 'production', jsonMin()))
           .pipe(gulp.dest(outputDir + 'json'))
           .pipe(connect.reload());
});

gulp.task('moveImages', function () {
    gulp.src('images/**/*.*')
            .pipe(gulpif(env === 'production', imageMin({
                use: [ pngCrush() ],
                progressive: true,
                svgoPlugins: [{ removeViewBox:false }]
            })))
            .pipe(gulp.dest(outputDir + 'images'))
            .pipe(connect.reload());
});

gulp.task('default', ['html', 'bootstrapJS', 'less', 'moveImages', 'json', 'connect', 'watch']);