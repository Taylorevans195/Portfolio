const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'), //The string in static() needs to be whatever your frontend folder is named.

app.get('/', (req,res) => {
  res.status(200).sendFile(path.join(__dirname, '[path to frontend html from server file]'))
}),

app.listen(4000, console.log(`App running on 4000`)))