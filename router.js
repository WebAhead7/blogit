const homeHandler = require("./handlers/home");
const missingHandler = require("./handlers/missing");
const publicHandler = require("./handlers/public");
const submitHandler = require("./handlers/submit");

function router(request, response) {
    const url = request.url;
    const method = request.method;
    if (url === "/") {
      homeHandler(request, response);
    }
    else if (url.includes('front-end')){ //loading front-end folder (html css js)
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
  }
  
  module.exports = router;