const missingHandler = require('./missing');
const model = require('../src/models');

function dataHandler(request, response) {
  let body = '';
  request.on('data', (chunk) => {
    body += chunk;
  });
  request.on('end', () => {
    model
      .getUserNamePost()
      .then((data) => {
        response.writeHead(200, { 'content-type': 'application/json' });
        response.end(JSON.stringify(data));
      })
      .catch((error) => {
        console.log('getdata error: ' + error);
        response.statusCode = 500;
        missingHandler(request, response);
        return;
      });
  });
}

module.exports = dataHandler;
