import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'

const Professores = ({navigation}) => {
  return (
    <>
    <View>
      <Button onPress={() => navigation.push('form-professor')}> Ir </Button>
    </View>
    </>
  )
}

export default Professores