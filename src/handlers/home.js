const path = require('path');

const mimeType = require('mime-types');

const response = require('./genaricResponse');

const home = (req, res) => {
  const filePath = path.join(__dirname, '..', '..', 'public', 'index.html');
  response.readFile(res, filePath, { 'Content-Type': 'text/html' });
};

const homeMedeia = (req, res) => {
  const endpoint = req.url;
  const mediaFilePath = path.join(__dirname, '..', '..', endpoint);
  const type = mimeType.lookup(endpoint);
  response.readFile(res, mediaFilePath, { 'Content-Type': type });
};

module.exports = { home, homeMedeia };
