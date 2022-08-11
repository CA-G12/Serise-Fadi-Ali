const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end();
  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
};

module.exports = router;
