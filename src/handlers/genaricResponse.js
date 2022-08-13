const fs = require('fs');

const error = (res, statusCode, erorMessages) => {
  res.writeHead(statusCode);
  res.end(erorMessages);
};

const success = (res, statusCode, header, data) => {
  res.writeHead(statusCode, header);
  res.end(data);
};

const readFile = (res, filePath, header) => {
  fs.readFile(filePath, (err, data) => {
    if (!err) success(res, 200, header, data);
    else error(res, 500, '<h1>Internal Server Error');
  });
};

const filterResults = (seriesList, data) => seriesList.filter((seriee) => {
  if (seriee.toLowerCase().includes(data.toLowerCase())) {
    return seriee;
  }
});

module.exports = {
  error,
  success,
  readFile,
  filterResults,
};
