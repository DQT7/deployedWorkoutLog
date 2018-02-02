var gulp = ('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var javascriptFiles = [
    './app.js',
    './workouts/define.js',
    './workouts/log.js',
    './user/auth.js'
];

gulp.task('bundle', function(){
    return gulp.src(javascriptFiles)
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest("./dist"));


});
gulp.task('default', ['bundle']);