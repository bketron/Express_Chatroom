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
const users = [{
    id: '',
    username: '',
    color: ''
}]
var messages = []
var numUsers = 0
var username = ''

io.on('connection', function(socket){
    socket.on('addMessage', function(message){
    	var id = socket.client.conn.id
    	var userMessage = {}
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
                io.emit('newMessage', {
                    id: id,
                    username: users[i].username,
                    message: message,
                    time: timeStamp,
                    userColor: users[i].color
                })
            }
        }


        // userMessage = {
        // 	id: id,
        // 	username: username,
        // 	message: message,
        // 	time: timeStamp
        // }

        messages.push(userMessage)

        // io.emit('newMessage', userMessage)

    })

    socket.on('addUser', function(user) {
        var doesExist = false

        for(var i=0; i<users.length; i++){
            if(users[i].id === socket.client.conn.id){
                users[i].username === user.username
                doesExist = true
            }
        }

        if(doesExist === false) {
            users.push({
                id: socket.client.conn.id,
                username: user.username,
                color: user.userColor
            })
        }

        io.emit('newUser', {
            id: socket.client.conn.id,
            username: user.username,
            color: user.userColor
        })

    })
})

server.listen(3001, function(){
    console.log('listening on port 3001')
})