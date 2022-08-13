const handlers = require('./handlers/handlers');

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') handlers.homeHandle.home(req, res);
  else if (endpoint.includes('public')) handlers.homeHandle.homeMedeia(req, res);
  else if (endpoint === '/seriee-search' && req.method === 'POST') handlers.searchHandle.search(req, res);
  else if (endpoint.includes('/series')) handlers.seriesHandle.series(req, res);
  else if (endpoint.includes('/public/pages/series/')) handlers.seriesHandle.seriesStaticFiles(req, res);
  else if (endpoint === '/check-search' && req.method === 'POST') handlers.checkSearch.checkSearch(req, res);
  else handlers.notFoundHandle.pageNotFound(req, res);
};

module.exports = router;
