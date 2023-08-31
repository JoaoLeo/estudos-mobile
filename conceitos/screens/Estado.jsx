import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import styles from '../styles/style';

const Estado = () => {

  const [contador, setContador] = useState(0);

  return (
    <>
    <Text> Use state </Text>
    
  <Text> Contador : {contador}</Text>

        <View style={styles.linha}>
        <Button mode="outlined " onPress={() => setContador(contador + 1)}> + </Button>
        <Button mode="outlined " onPress={() => setContador(contador - 1)}> - </Button>
        </View>


    </>
  )
}

export default Estado
