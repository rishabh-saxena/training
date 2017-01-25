
function Spy(target, method)
{
var spy  = {
       count : 0
   }
console.log(target); 
   var originalMethod = target[method];
   console.log(target , method);
   target[method] = function () {
       spy.count++;
       console.log (Object.keys(this));
      return originalMethod.apply(target,arguments);
   }
   return spy;
}

module.exports = Spy