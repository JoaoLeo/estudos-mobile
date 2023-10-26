import React, { useState } from 'react'
import { ScrollView, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { mask } from 'remask'

const AlunosForm = ({navigation, route}) => {
  
  const aluno = route.params?.obj  || {}
  const id = route.params?.id

  async function salvar(dados){
    AsyncStorage.getItem('alunos').then(res =>{
    const alunos = JSON.parse(res) || []        
    if(JSON.stringify(dados) != "{}"){
      if(id >= 0){
        alunos.splice(id,1,dados)
      } else {
        alunos.push(dados)
      }
      console.log(dados);
      AsyncStorage.setItem('alunos', JSON.stringify(alunos))
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
    <Formik
     initialValues={aluno}
     onSubmit={values => salvar(values)}
   >
    {({values, handleChange, handleSubmit, errors, touched, setFieldValue})=>(
      <View>
        <TextInput style={{
      marginTop: 5
    }} 
    label="Nome" 
    mode='outlined' 
    value={values.nome}
    onChangeText={handleChange("nome")}
    />
    <TextInput style={{ 
      marginTop: 5}} 
      label="cpf"
      mode='outlined' 
      value={values.cpf}  
      onChangeText={value => setFieldValue('cpf',mask(value, '999.999.999-99'))}
      />
    <TextInput style={{ 
      marginTop: 5 }} label="matricula"
       mode='outlined' 
       value={values.matricula}
       onChangeText={handleChange("matricula")}
       />
      <TextInput style={{ 
      marginTop: 5 }} label="email"
       mode='outlined' 
       value={values.email}
       onChangeText={handleChange("email")}
       />

    <TextInput style={{ 
      marginTop: 5 }} label="telefone"
       mode='outlined' 
       value={values.telefone}
       onChangeText={value => setFieldValue('telefone',mask(value, '(99)999999999'))}
       />
       <TextInput style={{ 
      marginTop: 5 }} label="cep"
       mode='outlined' 
       value={values.cep}
       onChangeText={value => setFieldValue('cep',mask(value, '99999-999'))}
       />
        <TextInput style={{ 
      marginTop: 5 }} label="logradouro"
       mode='outlined' 
       value={values.logradouro}
       onChangeText={handleChange("logradouro")}
       />
       <TextInput style={{ 
      marginTop: 5 }} label="complemento"
       mode='outlined' 
       value={values.complemento}
       onChangeText={handleChange("complemento")}
       />
        <TextInput style={{ 
      marginTop: 5 }} label="numero"
       mode='outlined' 
       value={values.numero}
       onChangeText={handleChange("numero")}
       />
       <TextInput style={{ 
      marginTop: 5 }} label="bairro"
       mode='outlined' 
       value={values.bairro}
       onChangeText={handleChange("bairro")}
       />
   
    <Button onPress={handleSubmit}> Enviar </Button>
      </View>
    )}
       </Formik>
    </ScrollView>
    </>
  )
}

export default AlunosForm