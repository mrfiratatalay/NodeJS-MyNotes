const fs = require('fs');
const http = require('http');
const { dirname } = require('path');
const url = require('url');

// //API--------------------------------------

// const server = http.createServer((req, res) => {
//   const pathName = req.url;

//   if (pathName === '/' || pathName === '/overview') {
//     res.end('This page is my overview...');
//   } else if (pathName === '/product') {
//     res.end('This page is my product');
//   } else if (pathName === '/api') {
//     fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
//       const productData = JSON.parse(data);
//       res.writeHead(200, { 'Content-type': 'application-json' });
//       res.end(data);
//     });
//   } else {
//     res.writeHead(404, {
//       'Content-type': 'text/html',
//       'my-own-header': 'firat-atalay ',
//     });
//     res.end('<h1>Page is not found...</h1>');
//   }
// });

// server.listen(8000, '127.0.0.1', () => {
//   console.log('Listenin to requests on port 8000');
// });

//API--------------------------------------
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    res.end('This page is my overview...');
  } else if (pathName === '/product') {
    res.end('This page is my product');
  } else if (pathName === '/api') {
    res.writeHead(200, { 'Content-type': 'application-json' });
    res.end(data);
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
