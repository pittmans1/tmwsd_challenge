const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const messagesRoute = require('./routes/messages')
var bodyParser = require('body-parser')

// mongoose.connect('mongodb://localhost:127.0.0.1/claraPrice')

let database = mongoose.connection
database.once('open', function(){
 console.log('Connection established')
})
database.on('error', function(err){
  console.log(err.message)
})
// middleware

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


// express routes
app.use('/', messagesRoute)

// pug engine setup
app.set('view engine', 'pug')

app.listen(port, () => {
  console.log(`TMWSD is listening at http://localhost:${port}`)
})
