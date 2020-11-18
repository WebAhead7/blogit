const fs = require('fs');
<<<<<<< HEAD
const path = require('path')
const missingHandler = require('./missing')
function homeHandler(request, response){
    const filePath= path.join(__dirname,'../public/index.html')
    fs.readFile(filePath,(err,data) => {
        if (err){
            missingHandler(request,response)
            return 
        }
    response.writeHead(200, { "content-type": "text/html" })
    response.end(data)
});
}
=======
const path = require('path');
const missingHandler = require('./missing');
>>>>>>> f9bfa69bdf62a56e2dd5b11e64b35a4e2b235051

function homeHandler(request, response) {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log('home error: ' + error);
      missingHandler(request, response);
    } else {
      response.writeHead(200, { 'content-type': 'text/html' });
      response.end(file);
    }
  });
}
module.exports = homeHandler;
