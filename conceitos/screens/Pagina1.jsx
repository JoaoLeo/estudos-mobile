import React from 'react'
import { Avatar, Card, Text } from 'react-native-paper'
import { Button } from 'react-native';

const Pagina1 = ({navigation}) => {

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

  return (
    <>
    <Button title="Página 1" onPress={()=>{navigation.navigate("Pagina 1")}}></Button>
    <Button title="Página 2" onPress={()=>{navigation.navigate("Pagina 2")}}></Button>
      <Card >
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Actions>
          
        </Card.Actions>
      </Card>
      
      </>
  )
}

export default Pagina1