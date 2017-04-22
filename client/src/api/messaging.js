import io from 'socket.io-client'
import store from '../store'
const socket = io.connect('http://10.68.0.141:3000/')

export function addMessage(message) {
    socket.emit('addMessage', message)
}

export function addUser(username) {
    socket.emit('addUser', username)
}

socket.on('newMessage', function(data){
    store.dispatch({
        type: 'ADD_MESSAGE',
        data
    })
})

socket.on('newUser', function(username){
    store.dispatch({
        type: 'ADD_USER',
        user: {
            username: username,
            id: socket.id
        }
    })
    console.log(socket)
})