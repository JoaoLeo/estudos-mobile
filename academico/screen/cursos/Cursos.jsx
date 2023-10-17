import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Card, Divider, FAB, IconButton, Text } from 'react-native-paper'

const Cursos = ({navigation}) => {
  const [cursos, setCursos] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      AsyncStorage.getItem('cursos').then(res =>{
        res = JSON.parse(res) || []
        setCursos(res);
      })
    }, [])
  );
  
  return (
    <>
    <ScrollView style={{padding: 10}}> 

    <View> 

     {
       cursos.map((c,i) =>(
          <> 
         <Card key={i} mode='outlined' style={{marginBottom: 10}}>
            <Card.Content>
            <Text variant="titleLarge">{c.nome}</Text>
                <Text variant="bodyMedium">Duração: {c.duracao}</Text>
                <Text variant="bodyMedium">Modalidade: {c.modalidade}</Text>
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
    onPress={() => navigation.push('form-cursos')}
  /> 
    </>
  )
}

export default Cursos