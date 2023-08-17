import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';

export default function App() {
  return (
    <> 
    <ScrollView style={{
      marginTop: 50
    }}> 
    <View style={styles.card}>
   <Header/>
      <Text style={styles.titulo}>hello world!</Text>
      <StatusBar style="auto" />
    </View>


   
   <Card/>
   <Card/>
   
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
