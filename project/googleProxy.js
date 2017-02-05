var axios = require('axios');
var http = require('http');
var port = 8007;
var getGoogle = () => axios.get('https://www.google.co.in/');
var server = http.createServer(function (req, res) {
  getGoogle()
    .then(function (response) {
        res.writeHead(200);
      res.end(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});
server.listen(port);