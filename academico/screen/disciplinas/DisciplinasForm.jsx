import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

const DisciplinasForm = ({navigation,route}) => {
  
  let disciplina = {
    nome: '',
    duracao: '',
    modalidade: ''
  }
   
  const id = route.params?.id
  if(id){ 
    disciplina = route.params?.obj 
  }

  async function salvar(dados){
    AsyncStorage.getItem('disciplinas').then(res =>{
      const disciplinas = JSON.parse(res) || []        
    if(JSON.stringify(dados) != "{}"){
      if(id >= 0){
        disciplinas.splice(id,1,dados)
      } else {
        disciplinas.push(dados)
      }
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
    <Formik
     initialValues={disciplina}
     onSubmit={values => salvar(values)}
   >
    {({values, handleChange, handleSubmit})=>(
      <View>
 <TextInput style={{ 
      marginTop: 5}} 
      label="Duração" 
      keyboardType='decimal-pad'
      mode='outlined' 
      value={values.id}  
      onChangeText={handleChange("id")}
      />
    <TextInput style={{
      marginTop: 5
    }} 
    label="Nome" 
    mode='outlined' 
    value={values.nome}
    onChangeText={handleChange("nome")}
    />

    <TextInput style={{ 
      marginTop: 5 }} label="curso_id"
       mode='outlined' 
       value={values.disciplina_id}
       onChangeText={handleChange("curso_id")}
       />
   
    <Button onPress={handleSubmit}> Enviar </Button>
      </View>
    )}

   </Formik>
   
    </ScrollView>
    </>
  )
}

export default DisciplinasForm