
/**
 * grunt@1.5.3 入口文件
 * 自动执行 grunt 任务
 *
 * https://www.gruntjs.net/getting-started
 * https://www.npmjs.com/package/grunt
 *
 */
module.exports = grunt => {
    // default-默认, 第二数组参数：代表依次执行任务
    grunt.registerTask('default', ['bobby', 'task-desc', 'async-task'])

    grunt.registerTask('bobby', () => {
        console.log(`Config name: ${grunt.config('username')}`)
        console.log(`Config fe: ${grunt.config('fe.js')}`)
    })

    /**
     * 任务描述
     */
    grunt.registerTask('task-desc', '任务描述', () => {
        console.log('hello bobby~')

        // 代表执行失败，若想继续执行，可以加上参数 --fore 强制执行
        // return false
    })

    /**
     * 异步任务，需要普通函数，且生成done函数，完成后执行 done 函数
     */
    grunt.registerTask('async-task', function () {
        const done = this.async()
        setTimeout(() => {
            console.log('async task working~')
            done()

            // 代表执行失败，若想继续执行，可以加上参数 --fore 强制执行
            // done(false)
        }, 1000)
    })
}

