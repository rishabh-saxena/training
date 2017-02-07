const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const filePath = process.argv[2]
const app = express()
// app.use(bodyParser());
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.get('/read', function (req, res) {
  // console.log(req);
  fs.readFile(filePath, function fileRead(error, data) {
    if (error) {
      console.log(error)
    } else {
      var fileMessage = data.toString()
      res.send(fileMessage)
    }
  })
})
app.post('/write/:message', function (req, res) {
  fs.appendFile(filePath, `<br> ${req.params.message} `, (error) => {
    if (error) { throw error } else {
      res.send('Content written to the file')
    }
  })
})
app.put('/update/:linenumber', function (req, res) {
  const lineNumber = req.params.linenumber
  const dataMessage = req.body.data
  fs.readFile(filePath, function fileRead(error, data) {
    if (error) {
      console.log(error)
    } else {
      const fileMessage = data.toString()
      const messageArray = fileMessage.split('\n')
      if (lineNumber > messageArray.length) {
        res.sendStatus(500)
      } else {
        messageArray[lineNumber - 1] = dataMessage
        let message = messageArray.join('\n')
        fs.writeFile(filePath, message, (err) => {
          if (err) throw err
        })
        res.send('success')
      }
    }
  })
})
app.listen(3425)
