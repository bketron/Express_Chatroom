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
    socket.on('addMessage', function(message){
    	var id = socket.client.conn.id
    	var username = ''
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
                username = users[i].username
            }
        }

        userMessage = {
        	id: id,
        	username: username,
        	message: message,
        	time: timeStamp
        }

        messages.push(userMessage)

        io.emit('newMessage', userMessage)


        console.log(messages)
    })

    socket.on('addUser', function(user) {
        io.emit('login', user.username )
        io.emit('newUser', {
            id: socket.client.conn.id,
            username: user.username,
            color: user.userColor
        })

    	console.log(users)
    })
})

server.listen(3001, function(){
    console.log('listening on port 3001')
})