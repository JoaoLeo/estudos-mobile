import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'

const Turmas = ({navigation}) => {
  return (
    <>
    <View>
    <Button mode='contained' onPress={() => navigation.push('form-turmas')}> Novo </Button>
    </View>
    </>
  )
}

export default Turmas