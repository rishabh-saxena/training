var slice = Array.prototype.slice;
module.exports = function(namespace) {
      // SOLUTION GOES HERE
    var x = console.log.bind(null,namespace);
    return x;
}