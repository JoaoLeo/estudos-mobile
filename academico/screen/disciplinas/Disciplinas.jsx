import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'

const Disciplinas = ({navigation}) => {
  return (
    <>
    <View> 
    <Button mode='contained' onPress={() => navigation.push('form-disciplinas')}> Novo </Button>
    </View>
    
    </>
  )
}

export default Disciplinas