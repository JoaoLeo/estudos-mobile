import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'

const Turmas = ({navigation}) => {
  return (
    <>
    <View>
      <Button onPress={() => navigation.push('form-turmas')}> Ir </Button>
    </View>
    </>
  )
}

export default Turmas