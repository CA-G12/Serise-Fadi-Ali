const http = require('http');
require('dotenv').config();

const router = require('./routes');

const server = http.createServer(router);

server.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
});
