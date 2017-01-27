let userArray = process.argv.slice(2);
var minimumElement = Math.min(...userArray);
console.log(`The minimum of [${userArray}] is ${minimumElement}`);