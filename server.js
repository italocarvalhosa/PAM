
//3 entidade ( biblioteca, uso do protocolo http, web socket)
const express = require("express");
const http = require ("http");
const { Server } = require ("socket.io");

// instancia, cria o servidor, instancia o socket.io (io = input, output)
const app = express ();
const server = http.createServer(app)
const io = new Server(server);


//instancia do socket usada, hook do socket(clico de vida), mensagens, conecta e desconecta
io.on("connection", (socket) => {
    console.log(" Um cliente se conectou");
    
    socket.emit("message", "Olá do servidor");

    socket.on("disconnect", () => {
        console.log("Um cliente se desconectou");
    });


});

//express, sendo usada a porta 3000 do localhost
server.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})