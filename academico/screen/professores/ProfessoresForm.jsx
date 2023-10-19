import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { ScrollView } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

const ProfessoresForm = ({navigation}) => {
  const [dados, setDados] = useState({});

  function handleChange(valor, campo){
    setDados({...dados, [campo]: valor})
  }

  async function salvar(){
    AsyncStorage.getItem('professores').then(res =>{
      const professores = JSON.parse(res) || []        
    if(JSON.stringify(dados) != "{}"){
      professores.push(dados)
      console.log(dados);
      AsyncStorage.setItem('professores', JSON.stringify(professores))
      navigation.goBack();
    }
    })
  }
  return (
    <>
      <ScrollView style={{
      marginTop: 5
    }}> 
    <Text> Formulário de aluno </Text>
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
      label="cpf" 
      keyboardType='decimal-pad'
      mode='outlined' 
      value={dados.cpf}  
      onChangeText={(valor) => handleChange(valor, "cpf")}
      />
      
    <TextInput style={{ 
      marginTop: 5 }} label="matricula"
       mode='outlined' 
       value={dados.matricula}
       onChangeText={(valor) => handleChange(valor, "matricula")}
       />
        <TextInput style={{ 
      marginTop: 5}} 
      label="Salário" 
      keyboardType='decimal-pad'
      mode='outlined' 
      value={dados.salario}  
      onChangeText={(valor) => handleChange(valor, "salario")}
      />
      <TextInput style={{ 
      marginTop: 5 }} label="email"
       mode='outlined' 
       value={dados.email}
       onChangeText={(valor) => handleChange(valor, "email")}
       />

    <TextInput style={{ 
      marginTop: 5 }} label="telefone"
       mode='outlined' 
       value={dados.telefone}
       onChangeText={(valor) => handleChange(valor, "telefone")}
       />
       <TextInput style={{ 
      marginTop: 5 }} label="cep"
       mode='outlined' 
       value={dados.cep}
       onChangeText={(valor) => handleChange(valor, "cep")}
       />
        <TextInput style={{ 
      marginTop: 5 }} label="logradouro"
       mode='outlined' 
       value={dados.logradouro}
       onChangeText={(valor) => handleChange(valor, "logradouro")}
       />
       <TextInput style={{ 
      marginTop: 5 }} label="complemento"
       mode='outlined' 
       value={dados.complemento}
       onChangeText={(valor) => handleChange(valor, "complemento")}
       />
        <TextInput style={{ 
      marginTop: 5 }} label="numero"
       mode='outlined' 
       value={dados.numero}
       onChangeText={(valor) => handleChange(valor, "numero")}
       />
       <TextInput style={{ 
      marginTop: 5 }} label="bairro"
       mode='outlined' 
       value={dados.bairro}
       onChangeText={(valor) => handleChange(valor, "bairro")}
       />
    </ScrollView>
    <Button onPress={salvar}> Enviar </Button>
    </>
  )
}

export default ProfessoresForm