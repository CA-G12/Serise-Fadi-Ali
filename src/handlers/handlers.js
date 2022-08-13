const homeHandle = require('./home');
const errorHandle = require('./response');
const seriesHandle = require('./series');
const notFoundHandle = require('./notFound');
const searchHandle = require('./search');

module.exports = {
  homeHandle,
  errorHandle,
  seriesHandle,
  notFoundHandle,
  searchHandle,
};
