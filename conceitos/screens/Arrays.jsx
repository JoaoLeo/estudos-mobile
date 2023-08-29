import React from 'react'
import { Button, Text } from 'react-native'

const Arrays = ({navigation}) => {

    const carros = ['peugeout', 'fiat', 'ka', 'tiida'];

    const carro = {
        marca: 'vm',
        modelo: 'fusca',
        ano: 1978,
        cor: ''
    }
    return (
        <>
        <Button title="Página 1" onPress={()=>{navigation.navigate("Pagina 1")}}></Button>
        <Button title="Página 2" onPress={()=>{navigation.navigate("Pagina 2")}}></Button>
        <Text>
            {carros.map(c =>(
                <Text> {c} </Text>
            ))}
        </Text>
        
        
        
        </>
    )
}

export default Arrays