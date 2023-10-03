import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import FilmesPopulares from './FilmesPopulares';
import FilmesDetalhes from './FilmesDetalhes';
import AtoresDetalhes from '../atores/AtoresDetalhes';

const Stack = createNativeStackNavigator();

const FilmesStack = () => {
  return (
    <>
       <Stack.Navigator>
          <Stack.Screen name='filmes-populares' component={FilmesPopulares} options={{title: "Filmes populares"}} />
          <Stack.Screen name='filmes-detalhes' component={FilmesDetalhes} options={{title: "Filmes detalhes"}} />
          <Stack.Screen name='atores-detalhes' component={AtoresDetalhes} options={{title: "Atores detalhes"}} />
        </Stack.Navigator>
    
    </>
  )
}

export default FilmesStack