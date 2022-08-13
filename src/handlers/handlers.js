const homeHandle = require('./home');
const errorHandle = require('./genaricResponse');
const seriesHandle = require('./series');
const notFoundHandle = require('./notFound');
const searchHandle = require('./search');
const checkSearch = require('./checkSearch');

module.exports = {
  homeHandle,
  errorHandle,
  seriesHandle,
  notFoundHandle,
  searchHandle,
  checkSearch,
};
