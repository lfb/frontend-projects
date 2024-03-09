
/**
 * grunt@1.5.3 入口文件
 * 自动执行 grunt 任务
 *
 * https://www.gruntjs.net/getting-started
 * https://www.npmjs.com/package/grunt
 *
 */
module.exports = grunt => {
    // 配置属性方法
    grunt.initConfig({
        // yarn grunt clean 运行插件
        clean: {
            dist: 'dist/app.js'
        }
    })
    // 使用插件
    grunt.loadNpmTasks('grunt-contrib-clean')
}

