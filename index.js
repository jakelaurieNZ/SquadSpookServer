const express = require('express')
const app = express()
const WebSocket = require('ws')

app.get('/', function(req, res) {

})

app.listen(3000, function() {
    console.log('listening on port 3000')
})

const ws = new WebSocket('wss://playsquad.online/servers/live/', {
    perMessageDeflate: false
})

ws.on('open', function open() {
    console.log('connected')
})

ws.on('message', function incoming(data) {
    console.log(data);
});