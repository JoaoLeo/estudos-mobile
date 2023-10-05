import React from 'react'
import Professores from './Professores'
import ProfessoresForm from './ProfessoresForm'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const ProfessoresStack = () => {
  return (
    <>
    
    <Stack.Navigator>
    <Stack.Screen name='professor' component={Professores} options={{title: "Professores"}} />
    <Stack.Screen name='form-professor' component={ProfessoresForm} options={{title: "Form professor"}} />

    </Stack.Navigator>
    </>
    
  )
}

export default ProfessoresStack
