const fs = require('fs');
const path = require('path');
const missingHandler = require('./missing');

const types = {
  html: 'text/html',
  css: 'text/css',
  js: 'application/javascript',
  ico: 'image/png',
  jpeg: 'image/jpeg',
  jpg: 'image/jpg',
  json: 'application/json',
};

function publicHandler(request, response) {
  const urlArray = request.url.split('.');
  const extension = urlArray[1];
  const type = types[extension];
  const url = request.url;
  const filePath = path.join(__dirname, '..', url);
  console.log(filePath);
  console.log(urlArray);

  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log('public error: ' + error);
      missingHandler(request, response);
    } else {
      response.writeHead(200, { 'content-type': type });
      response.end(file);
    }
  });
}

module.exports = publicHandler;
