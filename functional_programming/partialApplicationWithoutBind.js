var slice = Array.prototype.slice

    function logger(namespace) {
    
    return function ()
    {
        var args = slice.call(arguments);
        //console.log(args);
        //console.log(slice.call(arguments).join(' '));
        console.log.apply(console,[namespace].concat(slice.call(arguments)));
    }   



    }

    module.exports = logger