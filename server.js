import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import http from 'http'
const server = http.createServer(app);
import { Server } from 'socket.io'

import trucoRouter from './routes/chatRoute.js'

import socketInit from './sockets/chatSocket.js';

const io = new Server(server);


socketInit(io);



app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.use('/', trucoRouter);

server.listen('5000', function() {
    console.log('backend em execução');
})