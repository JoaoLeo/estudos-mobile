import React, { useEffect, useState } from 'react'
import { Button, Card, Text } from 'react-native-paper'
import {listNowPlaying, listPopular} from '../../services/Movies'
import axios from 'axios';
import api from '../../services/config/api';
import { View } from 'react-native';
//import {TOKEN} from 'react-native-dotenv'
const FilmesPopulares = () => {

  const [FilmesPopulares, setFilmesPopulares] = useState([]);

  return (

    <>
    <View> 
    <Button mode='outlined' onPress={()=>{
      api.get("/movie/popular?language=pt-BR").then(res =>{
        setFilmesPopulares(res.data.results);
      })
      
    }}> Carregar filmes </Button>
    {FilmesPopulares.map(fp => (
      <> 
    <Card style={
      {
        margin: 10
      }
    }>
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
    </>
  )
}

export default FilmesPopulares