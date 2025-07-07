const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const server = http.createServer()

server.on('request', (request, res) => {
    let filePath = '';

    if(request.url === '/' || request.url === '/index') {
        filePath = './index.html'
    }else if(request.url === '/about') {
        filePath = './about.html'
    }else if(request = '/contact-me'){
        filePath = './contact-me.html'
    }else{
        filePath = './404.html'
        res.statusCode = 404;
    }

    fs.readFile(filePath, (err, data) => {
        if(err){
            res.writeHead(500);
            res.end('Server Error');
        }else{
            res.writeHead(res.statusCode || 200, {'content-type': 'text/html'});
            res.end(data)
        }
    })
})

server.listen(8080, () => {
    console.log('Server running at http:///localhost:8080')
});