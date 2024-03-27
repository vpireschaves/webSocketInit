export default function socketInit(io){
    io.on("connection", (socket) => {
        console.log(`cliente ${socket.handshake.query.nome} se conectou`);
        socket.on("disconnect", (msg) => {
            console.log(`cliente ${socket.id} se desconectou`);
        })

        socket.on("enviarMsg", (msg) => {
            io.emit("enviarMsg", msg);
        })
    })
}