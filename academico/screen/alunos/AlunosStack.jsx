import React from 'react'
import Alunos from './Alunos'
import AlunosForm from './AlunosForm'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AlunosStack = () => {
  return (
    <> 
    <Stack.Navigator>
    <Stack.Screen name='alunos' component={Alunos} options={{title: "Alunos"}} />
    <Stack.Screen name='form-alunos' component={AlunosForm} options={{title: "Form aluno"}} />
    </Stack.Navigator>
    </>
  )
}

export default AlunosStack