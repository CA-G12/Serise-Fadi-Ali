const response = require('./genaricResponse');

const pageNotFound = (req, res) => {
  response.error(res, 404, '<h1 style="text-align: center; padding: 10rem;"> PAGE NOT FOUND :( </h1>');
};

module.exports = { pageNotFound };
