var numberArray = [1,2,3,4,5,6,7,8,9,10];
filteredNumberArray = numberArray.filter(function isEven(numberInArray)
{
return numberInArray%2 === 0 ;
});
console.log(filteredNumberArray);