var assert = require('assert');
var upperCaser = require('../toUpperCaseConverter');
describe('Upper Case Check', function () {
    it('should return the String in UpperCase', function () {
    assert.equal(upperCaser('bA','BA' ))
    });
    it('should return the String in UpperCase', function () {
        assert.equal(upperCaser('Ba', 'BA'));
    });
    it('should return the character in UpperCase', function () {
        assert.equal(upperCaser('a','A' ));
    });
    it('should return the character in UpperCase', function () {
        assert.equal(upperCaser('B','B' ));
    });
});
