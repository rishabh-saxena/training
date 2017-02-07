const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const readResponse = require('./readResponse')
const filePath = process.argv[2]
const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.get('/read', function (req, res) {
  fs.readFile(filePath, function fileRead (error, data) {
    if (error) {
      console.log(error)
    } else {
      var fileMessage = data.toString()
      const fileMessageArray = fileMessage.split('\n')
      res.render('./index', {fileMessageArray: fileMessageArray})
    }
  })
})
app.post('/write', function (req, res) {
  fs.appendFile(filePath, `\n ${req.body.inputText} `, (error) => {
    if (error) { throw error } else {
      // res.send('Content written to the file')
    //   const fileMessageArray = readResponse(filePath)
    //   console.log(fileMessageArray)
    //    res.render('./index', fileMessageArray)
//  fs.readFile(filePath, function fileRead (error, data) {
//     if (error) {
//       console.log(error)
//     } else {
//       var fileMessage = data.toString()
//       const fileMessageArray = fileMessage.split('\n')
//      // res.send(fileMessage)
//       res.render('./index', {fileMessageArray: fileMessageArray})
//     }
//   })
res.redirect('http://localhost:3425/read')










    }
  })
})
app.post('/update', function (req, res) {
  const lineNumber = req.body.lineNumber
  const dataMessage = req.body.textUpdate
  //console.log(lineNumber)
  //console.log(textUpdate)
  fs.readFile(filePath, function fileRead (error, data) {
    if (error) {
      console.log(error)
    } else {
      const fileMessage = data.toString()
      const fileMessageArray = fileMessage.split('\n')
      if (lineNumber > fileMessageArray.length) {
        res.sendStatus(500)
      } else {
        fileMessageArray[lineNumber - 1] = dataMessage
        
        //res.render('./index', {fileMessageArray: fileMessageArray})

        let message = fileMessageArray.join('\n')
        fs.writeFile(filePath, message, (err) => {
          if (err) throw err
        })
        res.redirect('http://localhost:3425/read')
        // res.send('success')
      }
    }
  })
})
app.post('/destroy', function (req, res) {
  const lineNumber = req.body.lineNumber
  fs.readFile(filePath, function fileRead (error, data) {
    if (error) {
      console.log(error)
    } else {
      const fileMessage = data.toString()
      const messageArray = fileMessage.split('\n')
      if (lineNumber > messageArray.length) {
        res.sendStatus(500)
      }      else {
        // const linesExceptGiven = fileMessage.split('\n').slice(lineNumber).join('\n')
         messageArray.splice(lineNumber,1)
        let linesExceptGiven = messageArray.join('\n')
        fs.writeFile(filePath, linesExceptGiven, (err) => {
          if (err) throw err
        })
        res.redirect('http://localhost:3425/read')
      }
    }
  })
})


app.listen(3425)

