const fs = require('fs');
const path = require('path');

const mimeType = {
  js: 'text/js',
  json: 'application/json',
  png: 'image/png',
  css: 'text/css',
};

const router = (req, res) => {
  const endpoint = req.url;
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  if (endpoint === '/') {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Internal Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (endpoint.includes('public')) {
    const mediaFilePath = path.join(__dirname, '..', endpoint);
    const extension = endpoint.split('.')[1];
    fs.readFile(mediaFilePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Internal Error');
      } else {
        res.writeHead(200, { 'Content-Type': mimeType[extension] });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
};

module.exports = router;
