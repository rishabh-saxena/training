var assert = require('assert');
var getShortMessages = require('../getShortMessages');
describe('#Array of Strings',function()
{
it('should return an array having strings of length less than 50',function()
{
assert.deepEqual(getShortMessages([{message:'Esse id amet quis eu esse aute official ipsum.'},
{message:'habdhabsd ashdbhabdsha hasbdhasbdhas ashbdhabsdhbasd asdhahsdahsdajsn andkansdknadkasdkn asdajkdakdada'}]),['Esse id amet quis eu esse aute official ipsum.']);
});
it('should return an array having strings of length less than 50',function()
{
assert.deepEqual(getShortMessages([]),[]);
});
});