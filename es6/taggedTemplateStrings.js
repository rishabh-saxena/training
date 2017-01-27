   console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

    function html(restString,userName,comment) {
        var finalString = comment.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;"); 
      var finalUserName = userName.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;");         

            return `${restString[0]+finalUserName+restString[1]+finalString+restString[2]}`;

//return restString[0]+finalUserName+restString[1]+finalString+restString[2];

        // what goes here?
        // don't forget to return the escaped string!
    }