import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Card, FAB, IconButton, Text } from 'react-native-paper'

const Professores = ({navigation}) => {
  const [professores, setprofessores] = useState([]);

  function get(){
    AsyncStorage.getItem('professores').then(res =>{
      res = JSON.parse(res) || []
      setprofessores(res);
    })
  }
  useFocusEffect(
    React.useCallback(() => {
      get()
    }, [])
  );
    
  function excluir(i){
    const confirmDelete = confirm("Deseja excluir realmente");
    if(confirmDelete){
    professores.splice(i,1);
    AsyncStorage.setItem('professores', JSON.stringify(professores));
    get();
  }
  }
  return (
    <>
    <ScrollView style={{padding: 10}}> 
    <View>
      
     {
       professores.map((c,i) =>(
          <> 
         <Card key={i} mode='outlined' style={{marginBottom: 10}}>
            <Card.Content>
            <Text variant="titleLarge">{c.nome}</Text>
                <Text variant="bodyMedium">cpf: {c.cpf}</Text>
                <Text variant="bodyMedium">email: {c.email}</Text>
                <Text variant="bodyMedium">telefone: {c.telefone}</Text>
              </Card.Content>
              <Card.Actions>
            <IconButton icon="delete-forever"  onPress={()=>{excluir(i)}}></IconButton>
            <IconButton icon="pencil" 
           onPress={() => navigation.push('form-professores', {id : i, obj : c})}
            ></IconButton>
          </Card.Actions>
          </Card>
          </>
        ))
      }
      </View>
      </ScrollView>
    <FAB
    icon="plus"
    size="small"
    style={{position: 'absolute', right: 0, bottom: 0}}
    onPress={() => navigation.push('form-professores')}
  /> 
    </>
  )
}

export default Professores