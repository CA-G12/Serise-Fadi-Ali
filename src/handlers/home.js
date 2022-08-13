const fs = require('fs');
const path = require('path');

const mimeType = require('mime-types');

const response = require('./response');

const home = (req, res) => {
  const endpoint = req.url;
  const filePath = path.join(__dirname, '..', '..', 'public', 'index.html');
  fs.readFile(filePath, (err, data) => {
    if (!err) response.success(res, 200, { 'Content-Type': 'text/html' }, data);
    else response.error(res, 500, '<h1>INTERNAL ERROR</h1>');
  });
};

const homeMedeia = (req, res) => {
  const endpoint = req.url;
  const mediaFilePath = path.join(__dirname, '..', '..', endpoint);
  const type = mimeType.lookup(endpoint);
  fs.readFile(mediaFilePath, (err, data) => {
    if (!err) response.success(res, 200, { 'Content-Type': type }, data);
    else response.error(res, 500, '<h1>INTERNAL ERROR</h1>');
  });
};

module.exports = { home, homeMedeia };
