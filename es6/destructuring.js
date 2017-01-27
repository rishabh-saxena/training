let userArray = process.argv.slice(2);
var userInformation = {};
[, userInformation.username, userInformation.email] = userArray;
console.log(userInformation);