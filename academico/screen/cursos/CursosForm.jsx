import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import * as Yup from 'yup';

import { Formik } from 'formik';

const CursosForm = ({navigation, route}) => {
  
  const curso = route.params?.obj  || {}
  const id = route.params?.id

  async function salvar(dados){
    AsyncStorage.getItem('cursos').then(res =>{
      const cursos = JSON.parse(res) || []        
    if(JSON.stringify(dados) != "{}"){
      if(id >= 0){
        cursos.splice(id,1,dados)
      } else {
        cursos.push(dados)
      }
      console.log(dados);
      AsyncStorage.setItem('cursos', JSON.stringify(cursos))
      navigation.goBack();
    }
    })

  }
  const cursoValidator = Yup.object().shape({
    nome: Yup.string()
    .nonNullable()
    .min(2,'Valor muito pequeno')
    .required('campo obrigatorio'),
    duracao: Yup.number().min(1,'Valor muito pequeno'),
    modalidade: Yup.string()
  })
  return (
    <>
    <ScrollView style={{
      marginTop: 5
    }}> 
    <Text> Formulário de curso </Text>

    <Formik
     initialValues={curso}
     validationSchema={cursoValidator}
     
     onSubmit={values => salvar(values)}
   >
    {({values, handleChange, handleSubmit, errors, touched})=>(
      <View>
        <TextInput style={{
      marginTop: 5
    }} 
    label="Nome" 
    mode='outlined' 
    value={values.nome}
    onChangeText={handleChange("nome")}
    />
        {(errors.nome && touched.nome) && <Text style={{color: 'red'}}> {errors.nome} </Text>}
    <TextInput style={{ 
      marginTop: 5}} 
      label="Duração" 
      keyboardType='decimal-pad'
      mode='outlined' 
      value={values.duracao}  
      onChangeText={handleChange("duracao")}
      />
      {(errors.duracao && touched.duracao) && <Text style={{color: 'red'}}> {errors.duracao} </Text>}
    <TextInput style={{ 
      marginTop: 5 }} label="Modalidade"
       mode='outlined' 
       value={values.modalidade}
       onChangeText={handleChange("modalidade")}
       />
   {(errors.modalidade && touched.modalidade) && <Text style={{color: 'red'}}> {errors.modalidade} </Text>}

    <Button onPress={handleSubmit}> Enviar </Button>
      </View>
    )}

   </Formik>
   </ScrollView>
    </>
  )
}

export default CursosForm