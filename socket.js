
//Configuração do socket
import { io } from "socket.io-client";

const Socket_URL = 'http://localhost:3000';

const socket = io( Socket_URL, {
    transports: ['websocket']
    });


    export default socket;