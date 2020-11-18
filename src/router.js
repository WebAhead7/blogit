const homeHandler = require('../handlers/home');
const missingHandler = require('../handlers/missing');
const publicHandler = require('../handlers/public');
const submitHandler = require('../handlers/submit');
const dataHandler = require('../handlers/data');

function router(request, response) {
  const url = request.url;
  const method = request.method;
  if (method === 'GET') {
    if (url === '/') {
      homeHandler(request, response);
    } else if (url.includes('public')) {
      publicHandler(request, response);
    }
  } else if (method === 'POST') {
    if (url.includes('submit')) {
      submitHandler(request, response);
    } else if (url.includes('data')) {
      dataHandler(request, response);
    }
  } else {
    missingHandler(request, response);
  }
}
module.exports = router;
