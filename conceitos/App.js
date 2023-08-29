import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';
import Buttons from './components/Buttons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pagina1 from './screens/Pagina1';
import Pagina2 from './screens/Pagina2';
import Arrays from './screens/Arrays';
import Objetos from './screens/Objetos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
   <NavigationContainer>
      
   <Stack.Navigator>
   <Stack.Screen name="Objetos" component={Objetos} options={{title: 'Objeto'}}/>
   <Stack.Screen name="Arrays" component={Arrays} options={{title: 'Array'}}/>
   <Stack.Screen name="Pagina 1" component={Pagina1} options={{title: 'Página principal'}}/>
   <Stack.Screen name="Pagina 2" component={Pagina2} options={{title: 'Página secundária'}} />
      </Stack.Navigator>

    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
