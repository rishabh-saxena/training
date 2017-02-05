var express = require('express');
var fs = require('fs');
var filePath = process.argv[2];
var app = express();
app.get('/read', function (req, res) {
  //console.log(req);
  fs.readFile(filePath, function fileRead(error, data) {
    if (error) {
      console.log(error);
    }
    else {
      var fileMessage = data.toString();
      res.send(fileMessage);
    }
  });
});
app.post('/write/:message', function (req, res) {
  fs.writeFile(filePath, req.params.message, (error) => {
    if (error)
    { throw error; }
    else {
      res.send('Content written to the file')
    }
  });
});
app.listen(3425);