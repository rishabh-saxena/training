 function duckCount() {
    //var count = 0;
    //var len=arguments.length;
    console.log(arguments);
   // console.log('\n\n\n\n');
    var x = [].reduce.call(arguments,function countQuack(total,curr)
    {
        console.log("curr ",curr);
          if(Object.prototype.hasOwnProperty.call(curr, 'quack'))
        {
            total+=1;
        }
    //console.log(arguments);
    /* if(Object.getPrototypeOf(curr) === Object.prototype)
     {
          if(curr.hasOwnProperty('quack'))
        {
            total+=1;
        }
     }
     else
     {
           if(Object.prototype.hasOwnProperty.call(curr, 'quack'))
        {
            total+=1;
        }
     } */
     return total;   
    },0);
    return x;
    }

    module.exports = duckCount