const HttpServer = require('http')
const FS = require('fs')
const PATH = require('path')
const PUBLIC_DIRECTORY = PATH.join(__dirname, '..', 'public')

class server {

    constructor(port, ip) {
        this.#createServer().listen(port, ip, () => {
            console.log(`server is running at port ${port}`)
        })
    }

    #createServer() {
        return HttpServer.createServer((req, res) => this.#route(req, res))
    }

    #route(req, res) {
        if(req.url === '/') {
            res.setHeader('Content-Type', 'text-html')
            res.writeHead(200)
            res.end(this.#getHTML('index.html'))
        }else if(req.url === '/cars') {
            res.setHeader('Content-Type', 'text-html')
            res.writeHead(200)
            res.end(this.#getHTML('cars.html'))
        }else if(req.url.match("\.css")){
            let filePath = PATH.join(__dirname, '..','public', req.url);
            let fileStream = FS.createReadStream(filePath, "UTF-8");
            res.writeHead(200, {"Content-Type": "text/css"});
            fileStream.pipe(res);
        } else if(req.url.match("\.js$")){
            let filePath = PATH.join(__dirname, '..', 'public', req.url);
            let fileStream = FS.createReadStream(filePath, "UTF-8");
            fileStream.pipe(res);
        } else if(req.url.match("\.jpg$") || req.url.match("\.png$") || req.url.match("\.jpeg$")){
            let filePath = PATH.join(__dirname, '..', 'public', req.url);
            res.writeHead(200, {"Content-type":"image/jpeg"})
            FS.readFile(filePath,function (err, content) {
                res.end(content);
            });

        } else {
            res.setHeader('Content-Type', 'text-html')
            res.writeHead(200)
            res.end('404')
        }
    }

    #getHTML(htmlFileName){
        const htmlFile = PATH.join(PUBLIC_DIRECTORY, htmlFileName)
        return FS.readFileSync(htmlFile, 'utf-8')
    }
}

module.exports = server