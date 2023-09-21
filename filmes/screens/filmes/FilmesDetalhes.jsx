import React, { useEffect, useState } from 'react'
import { Avatar, Card, IconButton, Text } from 'react-native-paper'
import api from '../../services/config/api'
import { ScrollView, View } from 'react-native'

const FilmesDetahes = ({navigation, route}) => {
  const [filme, setFilme] = useState({})
  const [atores, setAtores] = useState([])
  useEffect(()=>{
    api.get(`/movie/${route.params.id}`).then(res =>{
      setFilme(res.data);
    })
    api.get(`movie/${route.params.id}/credits`).then(res =>{
      setAtores(res.data.cast);
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
    <Card.Cover source={{ uri: `https://image.tmdb.org/t/p/w500/${filme.backdrop_path}` }} />
    <Card.Content>
      <Text variant="titleLarge" style={{
        fontWeight: 'bolder'
      }}>{filme.title}</Text>
      <Text variant="bodyMedium">{filme.overview}</Text>
    </Card.Content>
  
  </Card>
  <Text variant="titleLarge">Atores</Text>
    {atores.map(a =>(      
    <Card.Title
    key={a.id}
    title={a.name}
    subtitle={a.character}
    left={(props) =>  <Avatar.Image size={50} source={{ uri: `https://image.tmdb.org/t/p/w500/${a.profile_path}` }} />}
    right={(props) => <IconButton {...props} icon="arrow-right" onPress={() => { navigation.push('atores-detalhes',{id: a.id})}} />}
  />
      ))}
    </View>
    </ScrollView>
    </>
  )
}

export default FilmesDetahes