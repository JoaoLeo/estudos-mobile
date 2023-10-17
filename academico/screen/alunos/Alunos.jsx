import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'

const Alunos = ({navigation}) => {
  return (
    <>
    <View>
    <Button mode='contained' onPress={() => navigation.push('form-alunos')}> Novo </Button>
    </View>
    </>
  )
}

export default Alunos