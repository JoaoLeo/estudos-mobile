import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AlunosStack from './screen/alunos/AlunosStack'
import CursosStack from './screen/cursos/CursosStack'
import DisciplinasStack from './screen/disciplinas/DisciplinasStack';
import ProfessorStack from './screen/professores/ProfessoresStack'
import TurmasStack from './screen/turmas/TurmasStack';


const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
    
    <PaperProvider>       
      <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen 
      name='alunos' 
      component={AlunosStack}
      options={{
        tabBarLabel: 'alunos',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
       />
      <Tab.Screen 
       name='cursos'
       component={CursosStack}
       options={{
        tabBarLabel: 'cursos',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="notebook" color={color} size={26} />
        ),
      }}
        />
      <Tab.Screen
       name='disciplinas' 
       component={DisciplinasStack} 
       options={{
        tabBarLabel: 'disciplinas',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="notebook-outline" color={color} size={26} />
        ),
      }}
       />
       <Tab.Screen
       name='professores' 
       component={ProfessorStack} 
       options={{
        tabBarLabel: 'professores',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-box" color={color} size={26} />
        ),
      }}
       />
        <Tab.Screen
       name='turmas' 
       component={TurmasStack} 
       options={{
        tabBarLabel: 'turmas',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="clipboard" color={color} size={26} />
        ),
      }}
       />
    </Tab.Navigator>

      </NavigationContainer>
   </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
