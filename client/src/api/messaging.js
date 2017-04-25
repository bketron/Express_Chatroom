import io from 'socket.io-client'
import store from '../store'
const socket = io.connect('http://10.68.0.141:3001')

export function addMessage(message) {
    socket.emit('addMessage', message)
}

export function addUser(username) {
	socket.emit('addUser', username)
}

socket.on('newMessage', function(message){
    store.dispatch({
        type: 'ADD_MESSAGE',
        message
    })
})

socket.on('newUser', function(user){
	store.dispatch({
		type: 'ADD_USER',
		user
	})
})