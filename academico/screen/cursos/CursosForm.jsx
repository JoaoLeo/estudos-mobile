import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import { Formik } from 'formik';
import cursoValidators from '../../validators/cursoValidators';

const CursosForm = ({navigation, route}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();  
  let curso = {
    nome: '',
    duracao: '',
    modalidade: ''
  }
   
  const id = route.params?.id
  if(id){ 
    curso = route.params?.obj 
  }

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

  return (
    <>
    <ScrollView style={{
      marginTop: 5
    }}> 
    <Text> Formulário de curso </Text>

    <Formik
     initialValues={curso}
     validationSchema={cursoValidators}
     
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
   
   <Picker
  selectedValue={values.modalidade}
  onValueChange={handleChange('modalidade')}
>
<Picker.Item label="modalidade" value="" />
  <Picker.Item label="ead" value="ead" />
  <Picker.Item label="presencial" value="presencial" />
</Picker>
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