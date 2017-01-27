
var inputs = process.argv.slice(2), resultString = '';
var result = inputs.map((input) => { return input[0] })
var finalResult = result.reduce((resultString, inpu) => { return resultString + inpu }, resultString);
console.log('[' + inputs + ']' + ' becomes ' + '\"' + finalResult + '\"');
