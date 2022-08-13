const seriesList = require('../seriesList');
const response = require('./response');

const search = (req, res) => {
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
    response.success(res, 200, { 'Content-Type': 'application/json' }, JSON.stringify(results));
  });
};

module.exports = { search };
