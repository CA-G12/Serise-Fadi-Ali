const seriesList = require('../seriesList');
const response = require('./genaricResponse');

const search = (req, res) => {
  let allData = '';
  req.on('data', (chunk) => {
    allData += chunk;
  });
  req.on('end', () => {
    const data = JSON.parse(allData);
    const results = response.filterResults(seriesList, data);
    response.success(res, 200, { 'Content-Type': 'application/json' }, JSON.stringify(results));
  });
};

module.exports = { search };
