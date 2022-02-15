var gulp = require('gulp');
var shelljs = require('shelljs');
var fs = require('fs');

gulp.task('copy-api-md', ['git-clone'], async function () {
    if (!fs.existsSync('./temp')) {
        fs.mkdirSync('./temp');
    }
    await new Promise((resolve) => {
        gulp.src('temp/api/docs/javascript/**/*.md')
            .pipe(gulp.dest('docs/javascript'))
            .on("end", resolve);
    });
    shelljs.rm('-rf', 'temp');
});