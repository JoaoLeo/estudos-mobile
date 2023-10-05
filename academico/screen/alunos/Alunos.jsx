import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'

const Alunos = ({navigation}) => {
  return (
    <>
    <View>
      <Button onPress={() => navigation.push('form-alunos')}> Ir </Button>
    </View>
    </>
  )
}

export default Alunos