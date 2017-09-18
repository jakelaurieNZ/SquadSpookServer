const express = require('express')
const app = express()
const data = require('./data')

data.init('wss://playsquad.online/servers/live/')

app.get('/', function(req, res) {
    data.retrieveAll(function(replies) {
        res.send(replies)
    })
})

app.listen(3000, function() {
    console.log('listening on port 3000')
})