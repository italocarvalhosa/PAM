import {React, useState} from "react;"
import {TextInput, View, Text, Pressable, FlatList} from "react-native-web";
import ResultIMC from "./ResultIMC"
import styles from "./style";



export default function Form()
{
      const [height, setHeight] = useState(null);
      const[weight, setWeight] = useState(null);
      const[mensagem, setMensagem] = useState('Preencha o peso e a altura');
      const[imc, setImc] = useState(null);
      const[buttonTitle, setButtontitle] = useState ('Calcular');

      const [imcList, setImcList] = useState([])

      function imcCalculator()
      {
        let totalImc= (weight /(height*height)) . toFixed(2);

        setImcList((arr) => [...arr, {id: newDate().getTime() , 
            imc:totalImc }]);

            return setImc(totalImc);
      }

      function validarImc()
      {
        if  (weight != null && height != null) {
            imcCalculator();
            setHeight();
            setWeight();
            setMensagem("Seu imc e igual:")
            setButtonTitle("Calcular novamente");

        } else { 

        setImc(null);
        setButtonTitle('Calcular');
        setMensagem('Preencha o peso e altura');
        }
    
    
}



    return (

        <View style ={styles.formContext}>
            {imc == null?

            <View style={styles.form}> 
                <Text style={styles.formLabel}> Altura</Text>
                <TextInput 
                onChangeText ={setHeight}
                placeholder="1.75"
                inputMode="numeric"
                 value ={height}
                 style={styles.formInput}
                />

                <Text style={styles.formLabel}> Peso</Text>
                <TextInput 
                onChangeText ={setWeight}
                placeholder="80,2 (KG)"
                inputMode="numeric"
                 value = {weight}
                 style={styles.formInput}
                 />


                <Pressable
                    title={textButton}
                    style={styles.formButton} 
                    onPress={() => validarImc()}
                    >
                        <Text style={styles.formButtonText}>{buttonTitle}</Text>
                    </Pressable>
                    </View>
                    :
                    <View></View>
            }
            

            

            <Resultado mensagem={mensagem} imc={imc}></Resultado>




                <View style = {style.form}>
                </View>


                :

                <View style ={style.showImc}>
                    <ResultIMC messageResultImc ={Mensagem}ResultIMC ={imc}/>

                    <Pressable
                    title={textButton}
                    style={styles.formButton} 
                    onPress={() => validarImc()}>
                    
                        <Text style={styles.formButtonText}>{buttonTitle}</Text>
                    </Pressable>
                </View>
                

            <FlatList
                style={style.imcList}
                data = {imcList.reverse()}
                renderItem={({item}) => {
                    return(
                        <Text style ={style.imcListItem}>
                            <Text style ={style.imcListItemTExt}>Resultado IMC = </Text> {item.imc}
                        </Text>
                    )
                }}
                keyExtractor = {(item) => {
                    item.id
                }}
                />
            
        </View>

    );
}


