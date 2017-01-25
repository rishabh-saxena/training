var assert = require('assert');
var should = require('chai').should;
var doubleConverter = require('../doubleConverter');
describe('Doubling of Array',function()
{
it('should return array with values of array doubled',function()
{
assert.deepEqual([4,8],doubleConverter([2,4]));
}
);
it('should return an empty array',function()
{
assert.deepEqual([],doubleConverter([]));
}
);



});