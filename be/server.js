const express = require('express')
const app = express()
const cors = require('cors')
const { Server } = require('socket.io')
const PORT = 5000

app.use(cors())

const server = app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000'
    }
})
io.on('connection', (socket) => {
    console.log('using socket')
})