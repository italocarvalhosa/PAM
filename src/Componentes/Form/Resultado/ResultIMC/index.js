import React from "react";
import   { Text, View} from "react-native";
import styles from "./styles";

export default function ResultIMC (props)
{
    return (
        <View style ={styles.ResultIMC}>
            <Text style ={styles.information} > {props.messageResultIMC}</Text>
            <Text style = {style.numberIMC}>{props.resultIM}</Text>
            </View>
    )
}