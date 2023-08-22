import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';
import Buttons from './components/Buttons';

export default function App() {
  return (
    <> 

    <ScrollView style={{
      margin: 15
    }}> 
   
   <Header/>
   <Buttons/>
   <Card nome={"Stark"}>
    <Text> winter is coming </Text>
    <Button title='detalhes'/>
   </Card>
   <Card nome={"Baratheon"}></Card>
   <Card nome={"Snow"}/>
    </ScrollView>
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
