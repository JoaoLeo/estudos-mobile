import React from 'react'
import { Button } from 'react-native'
import { Avatar, Card, Text } from 'react-native-paper'

const Pagina2 = () => {

    const LeftContent = props => <Avatar.Icon {...props} icon="account" />

    const id = [
        {id: 1, name: 'Miguel', descricao: 'Aluno'},
        {id: 2, name: 'Joao', descricao: 'Aluno'},
        {id: 3, name: 'Orion Teles', descricao: 'Professor'},
        {id: 4, name: 'Vaz', descricao: 'Aluno'},
        {id: 5, name: 'Fernado', descricao: 'teste'},
        {id: 6, name: 'Pedro', descricao: 'Teste'}
    ]
    
    return (
        <>
        <Button title="Página 1" onPress={()=>{navigation.navigate("Pagina 1")}}></Button>
        <Button title="Página 2" onPress={()=>{navigation.navigate("Pagina 2")}}></Button>
            {id.map(nome => (
                <Card style={{ marginBottom: 15 }}>
                    <Card.Title title={nome.name} subtitle={nome.descricao} left={LeftContent}/>
                </Card>
            ))}
        </>
    )
}

export default Pagina2