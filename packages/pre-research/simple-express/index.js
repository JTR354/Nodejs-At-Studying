const http = require('http')
const path = require('path')
const url = require('url')
const fs = require('fs')
const querystring = require('querystring')
const express = require('express')

const {game} = require('../simple-http/game')

const app = express()

app.listen(3000)

app.get('/', (req, res) => {
   fs.createReadStream(path.join(__dirname, '../simple-http/index.html'))
    .pipe(res)
})

app.get('/game', (req, res, next) => {
    const {action} = req.query
    if (!action) {
        res.end()
        return
    }
    next()
    console.log(res.playWin ,1e9); // 中间件对异步支持不好
}, (req, res, next) => {
    const {action} = req.query
    res.playWin = false
    setTimeout(() => {
        res.playWin = true
    }, 0)
    try{
        const result = game(action)
        Math.random() > 0.5 ? res.json(result) : res.sendStatus(500)
    } catch(e) {
        console.info(e)
        res.sendStatus(500)
    }
})

// http.createServer((req,res) => {
//     const parseUrl = url.parse(req.url)
//     if (parseUrl.pathname === '/favicon.ico') {
//         res.writeHead(200)
//         res.end()
//         return
//     }
//     if (parseUrl.pathname === '/game') {
//         const {action} = querystring.parse(parseUrl.query)
//         if (!action) return
//         try{
//             const result = game(action)
//             res.writeHead(200)
//             res.end(JSON.stringify(result))
//         } catch(e) {
//             console.info(e)
//         }
//     }
//     res.writeHead(200)
//     fs.createReadStream(path.join(__dirname, '../simple-http/index.html')).pipe(res)

// }).listen(3000)
console.info(`server is on, port：3000`)