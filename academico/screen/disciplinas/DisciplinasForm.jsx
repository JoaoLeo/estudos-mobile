import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import React, { useState } from 'react'
import { ScrollView } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

const DisciplinasForm = ({navigation}) => {
  const [dados, setDados] = useState({});

  function handleChange(valor, campo){
    setDados({...dados, [campo]: valor})
  }

  async function salvar(dados){
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
    <Formik
     initialValues={curso}
     onSubmit={values => salvar(values)}
   >
    {({values, handleChange, handleSubmit})=>(
      <View>
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
   
    <Button onPress={handleSubmit}> Enviar </Button>
      </View>
    )}

   </Formik>
   
    </ScrollView>
    </>
  )
}

export default DisciplinasForm