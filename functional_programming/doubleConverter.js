function doubleConverter(numbers) {
    var doubleArray = numbers.map(function doubleChange(x) {
        return (x * 2);
    });
    return doubleArray;

}

module.exports = doubleConverter