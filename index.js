var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('You all are in AWS  Cloud Platform. This is TECHESSAY, Please share and Subscribe and like Videos'); //write a response to the client
  res.end(); //end the response
}).listen(4000); //the server object listens on port 4000
