 var toAverage = function average(...args) {
        var result = 0;
        args.forEach(function (value) {
            result += value;
        });
        var argumentLength = args.length;
        var averageOfArray = result/argumentLength;

        return averageOfArray;
    }
    module.exports = toAverage;