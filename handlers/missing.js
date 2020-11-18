function missingHanlder(request, response) {
  response.writeHead(404, { 'content-type': 'text/html' });
  response.end('<h1>Not Found missingHanlder</h1>');
}

module.exports = missingHanlder;
