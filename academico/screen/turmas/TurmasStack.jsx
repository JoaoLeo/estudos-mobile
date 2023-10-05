import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Turmas from './Turmas';
import TurmasForm from './TurmasForm';

const Stack = createNativeStackNavigator();
const TurmasStack = () => {
  return (
    <>
    
    <Stack.Navigator>
    <Stack.Screen name='turmas' component={Turmas} options={{title: "Turma"}} />
    <Stack.Screen name='form-turmas' component={TurmasForm} options={{title: "Form turma"}} />
    </Stack.Navigator>
    </>
  )
}

export default TurmasStack