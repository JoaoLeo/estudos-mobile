import React, { useEffect, useState } from 'react'
import { Card, Text } from 'react-native-paper'
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
       <Card key={a.id} style={
        {
          margin: 10
        }
      }>
      <Card.Cover source={{ uri: `https://image.tmdb.org/t/p/w500/${a.profile_path}` }} />
      <Card.Content>
        <Text variant="titleLarge" style={{
          fontWeight: 'bolder'
        }}>Ator: {a.name}</Text>
        <Text variant="bodyMedium">Personagem: {a.character}</Text>
      </Card.Content>
    
    </Card>
      ))}
    </View>
    </ScrollView>
    </>
  )
}

export default FilmesDetahes