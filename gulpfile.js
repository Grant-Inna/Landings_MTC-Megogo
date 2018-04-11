var gulp = require('gulp'),
    jade = require('gulp-jade'),
    less = require('gulp-less'),
    groupMedia = require('gulp-group-css-media-queries'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    notify = require("gulp-notify");


gulp.task('CSS1', function() {
    return gulp.src( '1/src/css/style.less' )
        .pipe(less())
        .pipe(groupMedia())
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe(gulp.dest( '1/production/css/' ))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest( '1/production/css/' ))
        .pipe(notify('CSS1 Success!'));
});


gulp.task('CSS2', function() {
    return gulp.src( '2/src/css/style.less' )
        .pipe(less())
        .pipe(groupMedia())
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe(gulp.dest( '2/production/css/' ))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest( '2/production/css/' ))
        .pipe(notify('CSS2 Success!'));
});

gulp.task('watch_CSS', function() {
    gulp.watch('common/*.less', ['CSS1', 'CSS2']);
});


gulp.task('jade1', function() {
    return gulp.src( '1/src/index.jade' )
        .pipe(jade())
        .pipe(gulp.dest( '1/production/' ))
        .pipe(rename('header.html'))
        .pipe(gulp.dest( '1/production/' ))
        .pipe(rename('header.min.html'))
        .pipe(gulp.dest( '1/production/' ))
        .pipe(rename('footer.html'))
        .pipe(gulp.dest( '1/production/' ))
        .pipe(rename('footer.min.html'))
        .pipe(gulp.dest( '1/production/' ));
});


gulp.task('jade2', function() {
    return gulp.src( '2/src/index.jade' )
        .pipe(jade())
        .pipe(gulp.dest( '2/production/' ))
        .pipe(rename('header.html'))
        .pipe(gulp.dest( '2/production/' ))
        .pipe(rename('header.min.html'))
        .pipe(gulp.dest( '2/production/' ))
        .pipe(rename('footer.html'))
        .pipe(gulp.dest( '2/production/' ))
        .pipe(rename('footer.min.html'))
        .pipe(gulp.dest( '2/production/' ));
});

gulp.task('watch_JADE', function() {
    gulp.watch('common/*.jade', ['jade1', 'jade2']);
});


gulp.task('default', ['CSS1', 'CSS2', 'watch_CSS', 'jade1', 'jade2', 'watch_JADE']);