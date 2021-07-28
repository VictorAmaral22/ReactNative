import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={{uri: 'https://avatars.githubusercontent.com/u/47861954?v=4'}} />
      <Text style={styles.textoNome}>Registre-se agora!</Text>
      <View style={styles.viewLogin}>
        <Text style={styles.login}>Insira o seu email</Text>
        <TextInput style={ styles.TextInput } />
        
        <Text style={styles.login}>Insira a sua senha</Text>
        <TextInput style={ styles.TextInput } secureTextEntry={true}/>
      </View>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoText}>Envia essa pika</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  TextInput: {
    borderWidth: 1,
    width: '80%',
    paddingLeft: 5
  },
  Image: {
    height: 200,
    width: '50%',
    borderRadius: 100
  },
  textoNome: {
    fontSize: 40,
    color: 'black'
  },
  viewLogin: {
    width: '100%',
    alignItems: 'center'
  },
  login: {
    fontSize: 20,
    color: 'black',
    marginVertical: 10
  },
  botao: {
    borderWidth: 1,
    width: '30%',
    height: 30,
    marginTop: 10
  },
  botaoText: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 2
  }
});

