const fs = require('fs');
const path = require('path');

const mimeType = {
  js: 'text/js',
  json: 'application/json',
  png: 'image/png',
  css: 'text/css',
};

const movesPage = (req, res) => {
  const filePath = path.join(__dirname, '..', 'public', 'pages', 'series', 'index.html');
  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(500);
      res.write('Internal Server Error');
      res.end();
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(file);
      res.end();
    }
  });
};

const movesPageMedia = (req, res) => {
  const endpoint = req.url;
  const mediaFilePath = path.join(__dirname, '..', '..', endpoint);
  console.log(mediaFilePath)
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

module.exports = {
  movesPage,
  movesPageMedia,
};
