
const url = require('url')
function submitHandler(request, response) {
  let body = "";
  // callback runs every time the stream has the next bit of data
  request.on("data", chunk => {
    body += chunk;
  });
  // callback runs when request finishes and we have all the data
  request.on("end", () => {
    console.log(body); // we should have the whole request body now
    response.writeHead(200, { "content-type": "text/html" });
    response.end("<h1>Thank you for submitting</h1>");
  });
}



module.exports = submitHandler;
