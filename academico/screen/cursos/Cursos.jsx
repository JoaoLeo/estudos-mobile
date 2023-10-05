import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'

const Cursos = ({navigation}) => {
  return (
    <>
    <View> 
     <Button onPress={() => navigation.push('form-cursos')}> Ir </Button>
    </View>
    </>
  )
}

export default Cursos