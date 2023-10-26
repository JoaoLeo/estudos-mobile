import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Card, FAB, IconButton, Text } from 'react-native-paper'

const Disciplinas = ({navigation}) => {
  const [disciplinas, setdisciplinas] = useState([]);

  function get(){
    AsyncStorage.getItem('disciplinas').then(res =>{
      res = JSON.parse(res) || []
      setdisciplinas(res);
    })
  }
  useFocusEffect(
    React.useCallback(() => {
      get();
    }, [])
  );

  function excluir(i){
    const confirmDelete = confirm("Deseja excluir realmente");
    if(confirmDelete){
    disciplinas.splice(i,1);
    AsyncStorage.setItem('disciplinas', JSON.stringify(disciplinas));
    get();
  }
  }

  return (
    <>
    <ScrollView style={{padding: 10}}> 

    <View> 

     {
       disciplinas.map((c,i) =>(
          <> 
         <Card key={i} mode='outlined' style={{marginBottom: 10}}>
            <Card.Content>
            <Text variant="titleLarge">{c.nome}</Text>
                <Text variant="bodyMedium">id: {c.id}</Text>
                <Text variant="bodyMedium">curso id {c.curso_id}</Text>
              </Card.Content>
              <Card.Actions>
            <IconButton icon="delete-forever" onPress={()=>{excluir(i)}}></IconButton>
            <IconButton icon="pencil"
            onPress={() => navigation.push('form-disciplinas', {id : i, obj : c})}></IconButton>
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
    onPress={() => navigation.push('form-disciplinas')}
  /> 
    </>
  )
}

export default Disciplinas