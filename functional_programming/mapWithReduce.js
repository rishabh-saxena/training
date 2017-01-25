 var mapReduce = function arrayMap(arr, fn) {
     var mappedArray = arr.reduce(function (finArr,curr)
     {
         finArr.push(fn(curr));
          return finArr;
     }
     ,[]);
return mappedArray;
}
    module.exports=mapReduce;