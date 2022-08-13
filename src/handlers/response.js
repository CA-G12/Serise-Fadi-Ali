const error = (res, statusCode, erorMessages) => {
  res.writeHead(statusCode);
  res.end(erorMessages);
};

const success = (res, statusCode, header, data) => {
  res.writeHead(statusCode, header);
  res.end(data);
};

module.exports = { error, success };
