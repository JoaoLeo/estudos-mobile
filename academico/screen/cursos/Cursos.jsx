import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Button, Text } from 'react-native-paper'

const Cursos = ({navigation}) => {
  const [cursos, setCursos] = useState([]);

  useEffect(()=>{
    AsyncStorage.getItem('cursos').then(res =>{
      res = JSON.parse(res) || []
      setCursos(res);
    })
  }, [])
  return (
    <>
    <View> 

     <Button onPress={() => navigation.push('form-cursos')}> Novo </Button>
     {
        cursos.map(c =>(
          <Text>{c.nome}</Text>
        ))
      }
    </View>
    </>
  )
}

export default Cursos