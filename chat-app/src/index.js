const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')
const {generateMessage, generateLocationMessage} = require('./utils/messages')
const { addUser, removeUser, getUser, getUsersInRoom } = require('./utils/users')
const { callbackify } = require('util')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))


io.on('connection', (socket) => {
    console.log('New WebSocket connection')

    socket.on('join', ({username, room}, call) => {
        const {error, user} = addUser({ id: socket.id, username, room })

        if (error){
            return call(error)  
        }

        socket.join(user.room)

        socket.emit('message', generateMessage('Admin', 'Welcome!'))
        socket.broadcast.to(user.room).emit('message', generateMessage('Admin', `${user.username} has joined`))

        call()
    })

    socket.on('sendMessage', (message, call) => {
        const user = getUser(socket.id)
        const filter = new Filter()

        io.to(user.room).emit('message', generateMessage(user.username, filter.clean(message)))
        call()
    })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id)

        if (user) {
            io.to(user.room).emit('message', generateMessage('Admin', `${user.username} has left!`))
        }
    })

    socket.on('sendLocation', (coords, call) => {
        const user = getUser(socket.id)
        io.to(user.room).emit('locationMessage', generateLocationMessage(user.username, `https://google.com/maps?q=${coords.latitude},${coords.longitude}`))
        call()
    })


})

server.listen(port, ()=> {
    console.log(`Server is up on port ${port}!`)
})
