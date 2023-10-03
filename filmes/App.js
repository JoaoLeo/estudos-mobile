import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FilmesPopulares from './screens/filmes/FilmesPopulares';
import { PaperProvider } from 'react-native-paper';
import FilmesDetalhes from './screens/filmes/FilmesDetalhes';
import AtoresDetahes from './screens/atores/AtoresDetalhes';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FilmesStack from './screens/filmes/FilmesStack';


const Tab = createMaterialBottomTabNavigator();

export default function App() {

  return (
    <>
    <PaperProvider>       
      <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen 
      name='filmes-populares' 
      component={FilmesStack}
      options={{
        tabBarLabel: 'Filmes populares',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="movie-open" color={color} size={26} />
        ),
      }}
       />
      <Tab.Screen 
       name='filmes-detalhes'
       component={FilmesDetalhes}
       options={{
        tabBarLabel: 'Séries',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
        />
      <Tab.Screen
       name='atores-detalhes' 
       component={AtoresDetahes} 
       options={{
        tabBarLabel: 'Ator detalhes',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
       />
    </Tab.Navigator>

      </NavigationContainer>
   </PaperProvider>
    </>
  );
}
