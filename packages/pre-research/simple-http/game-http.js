const http = require('http')
const path = require('path')
const url = require('url')
const fs = require('fs')
const querystring = require('querystring')

const {game} = require('./game')

http.createServer((req,res) => {
    const parseUrl = url.parse(req.url)
    if (parseUrl.pathname === '/favicon.ico') {
        res.writeHead(200)
        res.end()
        return
    }
    if (parseUrl.pathname === '/game') {
        const {action} = querystring.parse(parseUrl.query)
        if (!action) return
        try{
            const result = game(action)
            res.writeHead(200)
            res.end(JSON.stringify(result))
        } catch(e) {
            console.info(e)
        }
    }
    res.writeHead(200)
    fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res)

}).listen(3000)
console.info(`server is on, port：3000`)