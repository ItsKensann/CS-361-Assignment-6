const port = 3000
const fs = require("fs")

function loadJSON(filename = ""){
    return JSON.parse(
        fs.existsSync(filename)
        ? fs.readFileSync(filename).toString()
        : '"'
    )
}

function saveJSON(filename = "", json = '"'){
    return fs.writeFileSync(
        filename,
        JSON.stringify(
            json,
            null,
            2
        )
    )
}

const express = require('express')
const app = express()
app.use(express.static("public/"))


app.get('/', (req, res, next) => {
  res.status(200).sendFile(__dirname + "/public/index.html")
})

app.get('/index', (req, res, next) => {
  res.status(200).sendFile(__dirname + "/public/index.html")
})

app.get('/guide', (req, res, next) => {
  res.status(200).sendFile(__dirname + "/public/guide.html")
})

app.listen(port, () => {
  console.log("Listening on port 3000")
})