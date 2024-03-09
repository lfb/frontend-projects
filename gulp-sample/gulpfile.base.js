/**
 * gulp 入口文件
 *
 * CommonJS 规范
 */

// 默认
exports.default = done => {
    console.log('This is default task!');
    done()
}

// 每个任务都是异步
exports.checked = done => {
    console.log('hello, gulp!');
    done()
}

const gulp = require('gulp')
// 旧版，不推荐
gulp.task('oldTask', done => {
    console.log('This is oldTask task!')
    done()
})

/**
 * 组合任务
 * @param done
 */
const { series, parallel } = require('gulp')
const task1 = done => {
    setTimeout(() => {
        console.log('This is task1 task!')
        done()
    }, 1000)
}
const task2 = done => {
    setTimeout(() => {
        console.log('This is task2 task!')
        done()
    }, 1000)
}
const task3 = done => {
    setTimeout(() => {
        console.log('This is task3 task!')
        done()
    }, 1000)
}

// 串行执行任务
exports.sTasks = series(task1, task2, task3)
// 并行执行任务，如编译CSS/JS任务，互不干扰
exports.pTasks = parallel(task1, task2, task3)


/**
 * 异步任务的三种方式
 *
 * 1. callback
 */

exports.callback = done => {
    console.log('This is callback task!')
    done()
}

exports.callback_error = done => {
    console.log('This is callback_error task!')
    // 如果想阻止后面任务执行
    done(new Error('task failed!'))
}

exports.promise = () => {
    console.log('This is promise task!')
    // 成功！
    return Promise.resolve()
}

exports.promise_error = () => {
    console.log('This is promise task!')
    // 失败！- 阻止后面任务执行
    return Promise.reject('promise failed!')
}

const t = time => {
    return new Promise(resolve => setTimeout(resolve, time))
}

exports.async = async () => {
    await t(1000)
    console.log('This is async task!')
}

exports.async_error = async () => {
    await t(1000)
    console.log('This is async task!')
    throw new Error('async task failed!')
}

// 最常用
const fs = require('fs')
exports.stream = done => {
    const readStream = fs.createReadStream('package.json')
    const writeStream = fs.createWriteStream('temp.txt')

    readStream.pipe(writeStream)

    readStream.on('end', () => {
        console.log('Stream task done!')
        done()
    })
    readStream.on('error', err => {
        console.log('Stream task error!')
        done(err)
    })
}

/**
 * 构建过程
 *
 * 读取文件 - 加工 - 输出文件
 */
