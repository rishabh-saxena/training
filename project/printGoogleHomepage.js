// var axios = require('axios');
// var getGoogle = axios.get('https://www.google.co.in/');
// var getFacebook = axios.get('https://www.facebook.com/')
// getGoogle
//   .then(function (response) {
//     console.log(response);
//   })
//   .then(()=>getFacebook)
//   .then(function(response)
//   {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

var axios = require('axios');
var getGoogle = () => axios.get('https://www.google.co.in/');
var getFacebook = () => axios.get('https://www.facebook.com/')
getGoogle()
  .then(function (response) {
    console.log(response);
    return getFacebook();
  })
  //.then(()=>getFacebook)
  .then(function(response)
  {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

