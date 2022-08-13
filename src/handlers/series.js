const path = require('path');

const mimeType = require('mime-types');

const response = require('./genaricResponse');

const series = (req, res) => {
  const filePath = path.join(__dirname, '..', '..', 'public', 'pages', 'series', 'index.html');
  response.readFile(res, filePath, { 'Content-Type': 'text/html' });
};

const seriesStaticFiles = (req, res) => {
  const endpoint = req.url;
  const mediaFilePath = path.join(__dirname, '..', '..', endpoint);
  const type = mimeType.lookup(endpoint);
  response.readFile(res, mediaFilePath, { 'Content-Type': type });
};

module.exports = { series, seriesStaticFiles };
