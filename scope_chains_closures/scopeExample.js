function foo()
{
    var bar;
    quux=10;
    function zip()
    {
        var quux=12;
        //console.log(quux);
        bar=true;
    }
    return zip;
}