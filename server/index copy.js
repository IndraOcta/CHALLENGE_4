/**
 * Impor HTTP Standar Library dari Node.js
 * Hal inilah yang nantinya akan kita gunakan untuk membuat
 * HTTP Server
 * */
// const http = require('http');
const express = require('express');
const { PORT = 8000 } = process.env; // Ambil port dari environment variable
const HOST = '127.0.0.1'
const data = require('../data/cars.json')

const api = express()

const fs = require('fs');
const path = require('path');
const PUBLIC_DIRECTORY = path.join('..', 'public/');

function getHTML(htmlFileName) {
    const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName);
    return fs.readFileSync(htmlFilePath, 'utf-8')
}

api.get('/', (req, res) => {
    // res.send('../index.html')
    res.sendFile(getHTML("index.html"))
    console.log(getHTML("index.html"))
})

api.get('/cars', (req, res) => {
    res.status(200).json(data)
})



// function onRequest(req, res) {
//     switch (req.url) {
//         case "/":
//             res.writeHead(200)
//             res.end(getHTML("index.html"))
//             return;
//         case "/cars":
//             res.writeHead(200)
//             // res.status(200).json(data)
//             res.end(getHTML("find_car.html"))
//             return;
//         default:
//             //    res.writeHead(404)
//             //    res.end(getHTML("404.html"))
//             return;
//     }
// }

// const server = http.createServer(onRequest);

// Jalankan server
api.listen(PORT, HOST, () => {
    console.log(`Server sudah berjalan, silahkan buka ${HOST}:${PORT}`);
    // console.log(data);
})