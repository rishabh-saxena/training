var stringExclamation = function calculateMidpoint(input,stringLength=input.length)
{
var result = `${input}${'!'.repeat(stringLength)}`;
return result;
}
module.exports = stringExclamation;