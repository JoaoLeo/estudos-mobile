import React from 'react'
import { Text } from 'react-native'

const Card = () => {
  return (
    <>
     <View style={styles.card}>
      <Text style={styles.titulo}>jooj</Text>
      <Text> teste </Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    borderColor: "purple",
    borderWidth: 2,
    borderStyle: 'solid',
    marginBottom: 20
  },
  titulo: {
    color: 'purple',
    fontSize: 50 ,
    padding: 10,
    marginBottom: 20,
    borderBottomColor: 'black',
    borderBottomStyle: 'solid',
    borderBottomWidth: 5,
    textAlign: 'center'
     }
});

export default Card

