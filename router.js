const homeHandler = require('./handlers/home');
const missingHandler = require('./handlers/missing');
const publicHandler = require('./handlers/public');
const submitHandler = require('./handlers/submit');

function router(request, response) {
<<<<<<< HEAD
    const url = request.url;
    const method = request.method;
    if (url === "/") {
      homeHandler(request, response);
    }
    else if (url.includes('public')){ //loading front-end folder (html css js)
      publicHandler(request, response)
    }
    else if(url.includes('submit') && method == 'POST') {
      submitHandler(request, response);
    }
    //   else if(url.includes('getdata')) {
    //     getdataHandler(request, response);
    // } 
    else {
      missingHandler(request, response);
    }
=======
  const url = request.url;
  const method = request.method;
  console.log('router: ' + url);
  if (url === '/') {
    homeHandler(request, response);
  } else if (url.includes('public')) {
    publicHandler(request, response);
  } else if (url.includes('submit') && method === 'POST') {
    submitHandler(request, response);
  } else {
    missingHandler(request, response);
>>>>>>> f9bfa69bdf62a56e2dd5b11e64b35a4e2b235051
  }
}
module.exports = router;
