const response = require('./genaricResponse');
const seariesList = require('../seriesList');

const checkSearch = (req, res) => {
  let allData = '';
  req.on('data', (chunk) => {
    allData += chunk;
  });

  req.on('end', () => {
    const data = JSON.parse(allData);
    const result = response.filterResults(seariesList, data);
    if (result.length === 0) response.success(res, 200, { 'Content-Type': 'application/json' }, JSON.stringify({ status: 'false', data }));
    else response.success(res, 200, { 'Content-Type': 'application/json' }, JSON.stringify({ status: 'true', data }));
  });
};

module.exports = { checkSearch };