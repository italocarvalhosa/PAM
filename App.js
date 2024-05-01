
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native ';
import Title from './src/Componentes/Title';
import Form from './src/Componentes/Form';
 
export default function App() {
  return (
    <View style={styles.container}>
      <Title title="Meu Primeiro Formulario"></Title>
      <Form> </Form>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
}
);
