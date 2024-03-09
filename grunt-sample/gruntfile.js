
/**
 * grunt@1.5.3 入口文件
 * 自动执行 grunt 任务
 *
 * https://www.gruntjs.net/getting-started
 * https://www.npmjs.com/package/grunt
 *
 */
const sass= require('sass')
const loadGruntTasks = require('load-grunt-tasks')

module.exports = grunt => {
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true,
                implementation: sass
            },
            main: {
                files: {
                    // 输出路径: 源路径
                    'dist/css/common.css': 'src/sass/common.scss'
                }
            }
        },
        babel: {
            options: {
                presets: ['@babel/preset-env']
            },
            main: {
                files: {
                    'dist/app.js': 'src/app.js'
                }
            }
        },
        watch: {
            js: {
                files: ['src/*.js', 'src/js/*.js'],
                tasks: ['babel']
            },
            css: {
                files: ['src/sass/*.scss'],
                tasks: ['sass']
            }
        }
    })
    // 使用插件
    // grunt.loadNpmTasks('grunt-sass')
    // 自动加载所有的 grunt 插件的任务
    loadGruntTasks(grunt)

    grunt.registerTask('default', ['sass', 'babel', 'watch'])
}
