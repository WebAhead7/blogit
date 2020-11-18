const http = require('http');
const router = require('./router');
var PORT = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || 'localhost';

const server = http.createServer(router);

server.listen(PORT, () =>
  console.log(`Listening on http://${hostname}:${PORT}`)
);
