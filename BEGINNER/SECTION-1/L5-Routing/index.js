const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  //ROUTER--------------------------------------
  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    res.end('This page is my overview...');
  } else if (pathName === '/product') {
    res.end('This page is my product');
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'firat-atalay ',
    });
    res.end('<h1>Page is not found...</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listenin to requests on port 8000');
});
