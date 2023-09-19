import React, { useEffect, useState } from 'react'
import { Button, Card, Text } from 'react-native-paper'
import axios from 'axios';
import api from '../../services/config/api';
import { ScrollView, View } from 'react-native';
//import {TOKEN} from 'react-native-dotenv'
const FilmesPopulares = ({navigation}) => {

  const [FilmesPopulares, setFilmesPopulares] = useState([]);

  useEffect(()=>{
    api.get("/movie/popular").then(res =>{
      setFilmesPopulares(res.data.results);
    })
  },[])

  return (

    <>
    <ScrollView>
  <View> 
    {FilmesPopulares.map(fp => (
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

export default FilmesPopulares