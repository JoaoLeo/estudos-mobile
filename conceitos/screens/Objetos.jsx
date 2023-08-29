import React from 'react'
import { Button, Text } from 'react-native'

const Objetos = ({navigation}) => {

    const carro =[ 
        {
            marca: 'vm',
            modelo: 'fusca',
            ano: 1978,
            cor: 'azul'
        },
        {
            marca: 'ge',
            modelo: 'celta',
            ano: 1978,
            cor: 'vermelha'
        },
        {
            marca: 'ford',
            modelo: 'ka',
            ano: 2021,
            cor: 'prata'
        },{
            marca: 'fiat',
            modelo: 'palio',
            ano: 4294,
            cor: 'roxo'
        },
]
    return (
        <>
        <Button title="Página 1" onPress={()=>{navigation.navigate("Pagina 1")}}></Button>
        <Button title="Página 2" onPress={()=>{navigation.navigate("Pagina 2")}}></Button>
        {carro.map(c=>(
            <Text>{c.marca} - {c.modelo}</Text>
        ))}
        
        
        
        </>
    )
}

export default Objetos