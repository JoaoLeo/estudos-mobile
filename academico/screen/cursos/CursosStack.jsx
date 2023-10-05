import React from 'react'
import Cursos from './Cursos'
import CursosForm from './CursosForm'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const CursosStack = () => {
  return (
    <> 

    <Stack.Navigator>
    <Stack.Screen name='curso' component={Cursos} options={{title: "Cursos"}} />
    <Stack.Screen name='form-cursos' component={CursosForm} options={{title: "Form curso"}} />

  </Stack.Navigator>
    </>
  )
}

export default CursosStack