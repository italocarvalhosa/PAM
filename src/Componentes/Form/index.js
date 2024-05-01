import {Button, TextInput, View, Text} from "react-native-web";
import Resultado from "./Resultado";
import { useState } from "react";
import styles from "./style";
import { TouchableOpacity } from "react-native";


export default function Form()
{
      const [height, setHeight] = useState(null);
      const[weight, setWeight] = useState(null);
      const[mensagem, setMensagem] = useState('Preencha o peso e a altura');
      const[imc, setImc] = useState(null);
      const[buttonTitle, setButtontitle] = useState ('Calcular');

      function calcularImc()
      {
        return setImc((weight/(height*height)).toFixed(2));
      }

      function validarImc()
      {
        if  (weight != null && height != null) {
            calcularImc();
            setHeight(null);
            setWeight(null);
            setMensagem("Seu imc e igual:")
            setButtonTitle("Calcular novamente");

            return;

        }

        setImc(null);
        setButtonTitle('Calcular');
        setMensagem('Preencha o peso e altura');
    
    }


    return (
        <View style= {styles.formContext}> 
            <View style={styles.form}> 
                <Text style={styles.formLabel}> Altura</Text>
                <TextInput 
                placeholder="1.75"
                 keyboardType="numeric"
                 onChangeText={setHeight}
                 value ={height}
                 style={styles.formInput}
                />

                <Text style={styles.formLabel}> Peso</Text>
                <TextInput 
                placeholder="80,2 (KG)"
                 keyboardType="numeric"
                 onChangeText={setWeight}
                 value = {weight}
                 style={styles.formInput}
                 />


                <TouchHableOpacity
                    title={buttonTitle}
                    style={styles.formButton} 
                    onPress={() => validarImc()}
                    >
                        <Text style={styles.formButtonText}>{buttonTitle}</Text>
                    </TouchHableOpacity>

            </View>

            <Resultado mensagem={mensagem} imc={imc}></Resultado>
        </View>

    );
}

