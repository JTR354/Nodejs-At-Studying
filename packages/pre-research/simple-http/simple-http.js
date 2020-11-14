const http = require('http')
const fs = require('fs')
const path = require('path')

function resolve(p) {
    return path.join(__dirname, p)
}

http.createServer((req, res) => {
    // console.log(req.url)
    const url = req.url
    if (url === '/favicon.icon') {
        res.writeHead(200)
        res.end()
        return
    }
    if (url === '/') {
        res.writeHead(200)
        fs.createReadStream(resolve('index.html')).pipe(res)
    }
    // res.writeHead(200)
    // res.end(`hello nodejs`)
}).listen(3000)

console.info(`server's port:3000`)