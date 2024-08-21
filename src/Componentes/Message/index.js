
import React, {useState, useEffect} from "react";
import { View, TextInput, Text, Pressable, FlatList } from "react-native";

export default function Message() {
    const [message, setMessage] = useState('')
    const [messageList, setMessageList] = useState('')

    function sendMessage() {

    }

    return(
        <View>
            <Text>Digite uma mensagem:</Text>
            <TextInput/>

            <Pressable
            title="Enviar"
            onPress={() => sendMessage()}
            
            />
            
            <Text>Mensagens enviadas</Text>
            <FlatList
                data={messageList.reserve()}
                renderItem={({item}) =>{
                    return(
                        <Text>
                            {item}
                        </Text>
                    )
                }}
                keyExtractor={(item) => {item}}
            />
        </View>
    )
}