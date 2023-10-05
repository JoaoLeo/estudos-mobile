import React from 'react'
import Disciplinas from './Disciplinas'
import DisciplinasForm from './DisciplinasForm'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const DisciplinasStack = () => {
  return (
    <>
    <Stack.Navigator>
    <Stack.Screen name='disciplinas' component={Disciplinas} options={{title: "Disciplinas"}} />
    <Stack.Screen name='form-disciplinas' component={DisciplinasForm} options={{title: "Form disciplina"}} />

    </Stack.Navigator>
    </>
  )
}

export default DisciplinasStack