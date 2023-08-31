import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = (props) => {

  const nome = props.nome|| ""

  return (
    <>
     <View style={styles.card}>
      <Text style={styles.titulo}>{nome}</Text>
      {props.children}
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
    borderBottomColor: 'purple',
    borderBottomStyle: 'solid',
    textAlign: 'center',
    backgroundColor: 'white'
     }
});

export default Card

