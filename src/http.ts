import express from 'express'
import { createServer } from 'http'
import { Server, Socket } from 'socket.io'
import { join } from 'path'

import './database'
import { routes } from './routes'

const app = express()

app.use(express.static(join(__dirname, '..', 'public')))
app.set('views', join(__dirname, '..', 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.get('/client', (request, response) => response.render('html/client.html'))

const http = createServer(app)
const io = new Server(http)

io.on('connection', (socket: Socket) => {
  console.log(`Conectou ${socket.id}`)
})

app.use(express.json())
app.use(routes)

export { http, io }
