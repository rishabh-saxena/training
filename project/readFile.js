var fs = require('fs');
var directoryName = process.argv[2];
var promiseFileRead = new Promise((resolve, reject) => {
  fs.readFile(directoryName, (error, data) => {
    if (error)
    { reject(error); }
    else
    { resolve(data); }
  });
})
promiseFileRead.then((data) => {
  console.log(data.toString());
}, (err) => {
  console.log(err);
});



