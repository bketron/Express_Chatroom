const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get("*", function(req, res){
    res.sendfile(__dirname + '/client/public/index.html')
})

// app.get("/api", function(req, res){
//     res.json({
//         "foo":"bar"
//     })
// })

const users = []
const messages = []
var numUsers = 0

io.on('connection', function(socket){
    numUsers ++
    console.log(messages)
    socket.on('addMessage', function(message){
        var id = socket.client.conn.id
        var username = ""
        var timeStamp = new Date()
        var min = timeStamp.getMinutes()
        var hour = timeStamp.getHours()
        var sec = timeStamp.getSeconds()
        var day = timeStamp.getDay()
        var suffix = ''

        if(sec < 10){
            sec = '0' + sec
        }
        if(min < 10){
            min = '0' + min
        }

        if(hour >= 12){
            suffix = 'pm'
        } else if(hour < 12 || hour === 24){
            suffix = 'am'
        }

        if(hour > 12){
            hour = hour - 12
        }

        timeStamp = hour + ':' + min + ':' + sec + ' ' + suffix

        for(var i=0; i<users.length; i++) {
            if(users[i].id === id){
                username = users[i].username
            }
        }

        messages.push({
            message: message,
            id: socket.client.conn.id,
            username: username,
            time: timeStamp
            
        })

        var currentMessage = messages[messages.length -1]
        var lastMessage = messages[messages.length - 2]

        
        if(messages.length >= 2) {
            console.log(currentMessage)
            console.log(lastMessage)
        
        if(currentMessage.username !== ''){
            if(currentMessage.username === lastMessage.username){
                io.emit('newMessage', {
                    message: message,
                    id: id,
                    time: timeStamp
                })
            } else if(currentMessage.username !== lastMessage.username){
                io.emit('newMessage', {
                    message: message,
                    id: id,
                    username: username,
                    time: timeStamp
                })
            }

        }
    } else if(messages.length < 2){
        if(currentMessage.username !== '' && currentMessage.message !== ''){
            io.emit('newMessage', {
                message: message,
                id: id,
                username: username,
                time: timeStamp
            })
        }   
    }
})
    socket.on('addUser', function(username){
        for(var i=0; i<users.length; i++){
            if(users[i] === socket.client.conn.id){
                users[i] = {
                    username: username,
                    id: users[i],
                }
            }
        }
        io.emit('newUser', username)
        console.log(users)
    })

})

io.on('reconnect', function(){
    var doesExist = false
    if(username){
        io.emit('addUser', username)
    }
})

io.sockets.on('connection', function(socket){
    var doesExist = false

    for(var i=0; i<users.length; i++){
        if(users[i] === socket.client.conn.id){
            doesExist = true
            sendFile(__dirname + '/client/src/App.js')
        } 
    }

    if(doesExist === false){
        users.push(socket.client.conn.id)
    }

    console.log(users)
})

server.listen(3001, function(){
    console.log('listening on port 3001')
})