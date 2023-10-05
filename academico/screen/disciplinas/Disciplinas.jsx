import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'

const Disciplinas = ({navigation}) => {
  return (
    <>
    <View> 
     <Button onPress={() => navigation.push('form-disciplinas')}> Ir </Button>
    </View>
    
    </>
  )
}

export default Disciplinas