import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
const CursosForm = ({navigation}) => {
  
  const [dados, setDados] = useState({});
  function handleChange(valor, campo){
    setDados({...dados, [campo]: valor})
  }

  async function salvar(){
    AsyncStorage.getItem('cursos').then(res =>{
      const cursos = JSON.parse(res) || []        
    if(JSON.stringify(dados) != "{}"){
      cursos.push(dados)
      console.log(dados);
      AsyncStorage.setItem('cursos', JSON.stringify(cursos))
      navigation.goBack();
    }
    })

  }
  
  return (
    <>
    <ScrollView style={{
      marginTop: 5
    }}> 
    <Text> Formulário de curso </Text>
    <TextInput style={{
      marginTop: 5
    }} 
    label="Nome" 
    mode='outlined' 
    value={dados.nome}
    onChangeText={(valor) => handleChange(valor, "nome")}
    />
    <TextInput style={{ 
      marginTop: 5}} 
      label="Duração" 
      keyboardType='decimal-pad'
      mode='outlined' 
      value={dados.duracao}  
      onChangeText={(valor) => handleChange(valor, "duracao")}
      />
    <TextInput style={{ 
      marginTop: 5 }} label="Modalidade"
       mode='outlined' 
       value={dados.modalidade}
       onChangeText={(valor) => handleChange(valor, "modalidade")}
       />
    </ScrollView>
    <Button onPress={salvar}> Enviar </Button>
    </>
  )
}

export default CursosForm