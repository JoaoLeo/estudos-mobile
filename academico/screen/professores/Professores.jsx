import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'

const Professores = ({navigation}) => {
  return (
    <>
    <View>
    <Button mode='contained' onPress={() => navigation.push('form-professor')}> Novo </Button>
    </View>
    </>
  )
}

export default Professores