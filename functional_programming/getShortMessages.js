function getShortMessages(messages) {
    var filterMsg = messages.map(function msgFilter(input)
    {
    return input.message;
    });
  var shortMessages = filterMsg.filter(function msgArrayFilter(input)
    {
 var len = input.length;
    if(len < 50)
    {
        return true;
    }
    else
    {
        return false;
    }
    }); 
    return shortMessages;
    }   
    module.exports = getShortMessages