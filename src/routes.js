const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

const seriesList = require('./seriesList');
const seriesRoute = require('./movies');

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
  } else if (endpoint === '/seriee-search' && req.method === 'POST') {
    let allData = '';
    req.on('data', (chunk) => {
      allData += chunk;
    });
    req.on('end', () => {
      const data = JSON.parse(allData);
      const results = seriesList.filter((seriee) => {
        if (seriee.toLowerCase().includes(data.toLowerCase())) {
          return seriee;
        }
      });
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(results));
    });
  } else if (endpoint === '/movies' && req.method === 'GET') {
    seriesRoute.movies(req, res);
  } else if (endpoint === '/movies' && req.method === 'POST') {
    let allData = '';
    req.on('data', (chunk) => {
      allData += chunk;
    });
    req.on('end', () => {
      const seriesName = querystring.parse(allData);
      fetch(seriesName, (data) => {
        console.log(data);
        res.writeHead(302, { Location: '/movies' });
        res.end(data);
      });
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end();
    });
  } else if (endpoint.includes('/public/pages/series/')) {
    seriesRoute.seriesStaticFiles(req, res);
  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
};

module.exports = router;
