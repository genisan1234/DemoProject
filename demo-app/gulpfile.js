var gulp = require('gulp');
var uglify = require('gulp-uglify');
const { textSpanContainsPosition } = require('typescript');
gulp.task('uglify',async function(){
gulp.src('src/js/accUtils.js')
.pipe(uglify())
.pipe(gulp.dest('../build/src/js'));
});