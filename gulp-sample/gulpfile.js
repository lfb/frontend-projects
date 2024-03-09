const { src, dest } = require('gulp')

const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')


exports.default = done => {
    // 读
    src('src/css/*.css')
        // 转
        .pipe(cleanCSS())
        .pipe(rename({ extname: '.min.css' }))
        // 写
        .pipe(dest('dist/css'))

    done()
}

