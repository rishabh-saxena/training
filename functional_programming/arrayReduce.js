 function countWords(inputWords) {
     console.log(inputWords);
     var obj= {};
    inputWords.reduce(function wordFreq(obj,curr)
     {
         console.log("curr is "+ curr);
         var check = (curr in obj);
         console.log(check);
         if(check)
         {
             obj[curr] = obj[curr] + 1;
         }
         else
         {
    obj[curr] = 1;   
    console.log(obj);
         }
return obj;
     },obj);
     
     return obj;
    }

    module.exports = countWords