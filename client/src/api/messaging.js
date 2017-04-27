import io from 'socket.io-client'
import store from '../store'
const socket = io.connect('http://localhost:3001')
// const socket = io.connect('http://10.68.0.141:3001')

export function login(username) {
    store.dispatch({
        type: 'LOGIN',
        username
    })
}

export function addMessage(message) {
    socket.emit('addMessage', message)
}

export function addUser(user) {
	socket.emit('addUser', user)
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

socket.on('get user', function(user){
    console.log(user)
    store.dispatch({
        type: 'GET_USER',
        user
    })
})