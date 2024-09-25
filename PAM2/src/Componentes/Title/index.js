import React from "react";
import { View, Text} from "react-native";
import styles from "./style";

export default function Title (props)
{
   return (
    <View style={styles.boxTitle}>
        <Text style ={styles.textTitle}>Calculadora IMC{props.title}</Text>
    </View>
   );

 

}