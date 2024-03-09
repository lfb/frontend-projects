
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
        username: 'bobo',
        fe: {
            'js': 'JavaScript'
        },
        // yarn grunt build
        build: {
            options: {
                uid: 'bobby'
            },
            // yarn grunt build:css
            css: {
                // 这个会覆盖父级的 options
                options: {
                    uid: 'bobby'
                },
                files: {
                    'dist/css': 'css/*.css'
                }
            },
            // yarn grunt build:js
            js: './js/tools.js'
        }
    })

    /**
     * 多目标模式
     *
     * 可以让任务根据配置形成多个子任务
     */
    grunt.registerMultiTask('build', function() {
        // 代表当前任务的名称
        console.log('target: ', this.target)
        // 代表当前任务的配置
        console.log('data: ', this.data)
        // 代表当前任务的配置
        console.log('options:', this.options())
    })
}

