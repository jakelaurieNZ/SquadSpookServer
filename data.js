// data.js
module.exports = {
    init: function (socketAddress) {
        init(socketAddress)
    },
    retrieveAll: function(callback) {
        retrieveAll(callback)
    }
}

 var redis = require('redis'),
     client = redis.createClient();
const WebSocket = require('ws')

function init(socketAddress) {
    const ws = new WebSocket(socketAddress, {
        perMessageDeflate: false
    })
    
    ws.on('open', function open() {
        console.log('WebSocket connected')
    })
    
    ws.on('message', function incoming(data) {
        var server = JSON.parse(data)['server']

        if(server != null) {
            client.set(server['id'], data, 'EX', 240); //Expires in four minutes
        } else {
            console.log('fail')
        }
    });
}

function retrieveAll(callback) {
    client.keys('*', function (err, replies) {
        client.mget(replies, function (err, replies) {
            callback(replies)
        })
    })
}
