import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Card, FAB, IconButton, Text } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Alunos = ({navigation}) => {
  const [alunos, setalunos] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      AsyncStorage.getItem('alunos').then(res =>{
        res = JSON.parse(res) || []
        setalunos(res);
      })
    }, [])
  );
  return (
    <>
    <ScrollView style={{padding: 10}}> 
    <View>
      
     {
       alunos.map((c,i) =>(
          <> 
         <Card key={i} mode='outlined' style={{marginBottom: 10}}>
            <Card.Content>
            <Text variant="titleLarge">{c.nome}</Text>
                <Text variant="bodyMedium">cpf: {c.cpf}</Text>
                <Text variant="bodyMedium">matricula: {c.matricula}</Text>
                <Text variant="bodyMedium">email: {c.email}</Text>
                <Text variant="bodyMedium">telefone: {c.telefone}</Text>
              </Card.Content>
              <Card.Actions>
            <IconButton icon="delete-forever"></IconButton>
            <IconButton icon="pencil"></IconButton>
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
    onPress={() => navigation.push('form-alunos')}
  /> 
    </>
  )
}

export default Alunos