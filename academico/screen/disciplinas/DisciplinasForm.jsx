import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { ScrollView } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

const DisciplinasForm = ({navigation}) => {
  const [dados, setDados] = useState({});

  function handleChange(valor, campo){
    setDados({...dados, [campo]: valor})
  }

  async function salvar(){
    AsyncStorage.getItem('disciplinas').then(res =>{
      const disciplinas = JSON.parse(res) || []        
    if(JSON.stringify(dados) != "{}"){
      disciplinas.push(dados)
      console.log(dados);
      AsyncStorage.setItem('disciplinas', JSON.stringify(disciplinas))
      navigation.goBack();
    }
    })

  }
  return (
    <>
    <ScrollView style={{
      marginTop: 5
    }}> 
    <Text> Formulário de disciplinas </Text>
    <TextInput style={{ 
      marginTop: 5}} 
      label="Duração" 
      keyboardType='decimal-pad'
      mode='outlined' 
      value={dados.id}  
      onChangeText={(valor) => handleChange(valor, "id")}
      />
    <TextInput style={{
      marginTop: 5
    }} 
    label="Nome" 
    mode='outlined' 
    value={dados.nome}
    onChangeText={(valor) => handleChange(valor, "nome")}
    />

    <TextInput style={{ 
      marginTop: 5 }} label="curso_id"
       mode='outlined' 
       value={dados.curso_id}
       onChangeText={(valor) => handleChange(valor, "curso_id")}
       />
    </ScrollView>
    <Button onPress={salvar}> Enviar </Button>
    </>
  )
}

export default DisciplinasForm