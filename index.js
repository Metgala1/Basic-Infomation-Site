const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer()

server.on('request', (request, response) => {
  let filePath = ''
  let contentType = 'text/html'

  if(request.url === '/' || request.url === '/index'){
    filePath = path.join(__dirname, 'index.html')
  }else if(request.url === '/about'){
    filePath = path.join(__dirname, 'about.html')
  }else if(request.url === 'contact-me'){
    filePath = path.join(__dirname, 'contact-me.html')
  }else if(request.url === '/style.css'){
    filePath = path.join(__dirname, 'style.css')
    contentType = 'text/css'
  }else {
    filePath = path.join(__dirname, '404.html')
  }

  fs.readFile(filePath, (err, data) => {
    if(err){
      response.writeHead(500);
      response.end('server error');
      return
    }
    response.writeHead(200, {'content-type': contentType});
    response.end(data)
  })
})

server.listen(5050, () => {
  console.log('Server now running on localhost:5050')
})