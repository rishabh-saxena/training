function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        if (submittedUsers.every(function check(submittedUsers) {
            if (goodUsers.some(function check1(goodUsers) {
                if (submittedUsers.id === goodUsers.id) 
                {   return true; }
                else
               { return false; }
                
             } ))
               { return true; }
            else 
               { return false; }
        }
        ))
        { return true; }
        else
        { return false; }



    };
}
module.exports = checkUsersValid