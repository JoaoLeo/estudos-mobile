import React, { useEffect, useState } from 'react'
import { Avatar, Card, IconButton, Text } from 'react-native-paper'
import api from '../../services/config/api'
import { ScrollView, View } from 'react-native'

const AtoresDetahes = ({navigation, route}) => {
  const [ator, setAtor] = useState({})
  const [filmes, setFilmes] = useState([])

  useEffect(()=>{
    api.get(`person/${route.params.id}`).then(res =>{
      setAtor(res.data);
    })
    api.get(`person/${route.params.id}/movie_credits`).then(res =>{
        setFilmes(res.data.cast);
      })
  },[])
  
  return (
    <>
    <ScrollView> 
    <View> 
    <Card style={
      {
        margin: 10
      }
    }>
    <Card.Content>
    <Avatar.Image size={200} source={{ uri: `https://image.tmdb.org/t/p/w500/${ator.profile_path}`}} />
      <Text variant="titleLarge" style={{
        fontWeight: 'bolder'
      }}>{ator.name}</Text>
      <Text variant="bodyMedium">Nascida em: {ator.place_of_birth}, no dia {ator.birthday} </Text>
      <Text variant="bodyMedium">Biografia: {ator.biography}</Text>
    </Card.Content>
  
  </Card>

  <Text> Filmes: </Text>
  {filmes.map(fp => (
    <> 
  <Card 
  key={fp.id} 
  onPress={() => navigation.push('filmes-detalhes',{id: fp.id})}
  style={{ margin: 10}}
  >
    <Card.Cover source={{ uri: `https://image.tmdb.org/t/p/w500/${fp.backdrop_path}` }} />
      <Card.Content>
        <Text variant="titleLarge" style={{
          fontWeight: 'bolder'
        }}>{fp.title}</Text>
        <Text variant="bodyMedium">{fp.overview}</Text>
      </Card.Content> 
  </Card>
  
    </>
    ))}
    </View>
    </ScrollView>
    </>
  )
}

export default AtoresDetahes