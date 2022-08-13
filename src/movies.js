const fs = require('fs');
const path = require('path');

const mimeType = {
  js: 'text/js',
  json: 'application/json',
  png: 'image/png',
  css: 'text/css',
};

const movies = (req, res) => {
  const endpoint = req.url;
  const filePath = path.join(__dirname, '..', 'public', 'pages', 'series', 'index.html');
  console.log(filePath);
  if (endpoint === '/movies') {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Internal Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
}};

const seriesStaticFiles = (req, res) => {
  const endpoint = req.url;
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
};

module.exports = { movies, seriesStaticFiles };
