
//importação de tudo que irá ser usado
import React, {useEffect, useState} from "react";
import {View, Text } from "react-native";
import socket from "./socket";

//usando a variavel message com useState
export default function App() {
  const [message, setMessage] = useState('');

  //uso do useEffect e a transmissao para o servidor
  useEffect(() => {
    socket.on('connect', () => {
      console.log("conectado ao servidor")
    });

    socket.on("message", (msg) =>{
      setMessage(msg) 
    });

    return () => {
      socket.off("connect")
      socket.off("message")
    }
  }, []);

  //Definicao da tela a ser exibida
  return (
    <View style ={{flex:1 , justifyContent: "center", alignItens: "center"}}>
      <Text>
        Mensagem do servidor: {message}
      </Text>
    </View>
  );
}