const fs = require('fs')
const { Transform } = require('stream')

exports.default = () => {
    // 输入 - 读取流
    const read = fs.createReadStream('src/css/normalize.css')
    const write = fs.createWriteStream('dist/css/normalize.min.css')

    // 加工 - 转化流
    const transform = new Transform({
        transform(chunk, encoding, callback) {
            // Buffer
            const input = chunk.toString()
            const output = input.replace(/\s+/g, '').replace(/\/\*.\*\//g, '')
            callback(null, output)
        },
    })

    // 输出 - 写入流
    read.pipe(transform).pipe(write)

    return read
}
