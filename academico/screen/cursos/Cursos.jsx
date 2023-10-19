import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Card, Dialog, Divider, FAB, IconButton, Portal, Text } from 'react-native-paper'

const Cursos = ({navigation}) => {
  const [cursos, setCursos] = useState([]);
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState(0)

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  function get(){
    AsyncStorage.getItem('cursos').then(res =>{
      res = JSON.parse(res) || []
      setCursos(res);
    })
  }
  useFocusEffect(
    React.useCallback(() => {
      get()
    }, [])
  );
  function confirmDelete(i){
    setId(i);
    showDialog()
  }
  function excluir(){
    cursos.splice(id,1);
    AsyncStorage.setItem('cursos', JSON.stringify(cursos));
    get();
    hideDialog();
  }

  return (
    <>
    <ScrollView style={{padding: 10}}> 

    <View> 

     {
       cursos.map((c,i) =>(
          <> 
         <Card key={i} mode='outlined' style={{marginBottom: 10}}>
            <Card.Content>
            <Text variant="titleLarge">{c.nome}</Text>
                <Text variant="bodyMedium">Duração: {c.duracao}</Text>
                <Text variant="bodyMedium">Modalidade: {c.modalidade}</Text>
              </Card.Content>
              <Card.Actions>
            <IconButton icon="delete-forever" onPress={()=>{confirmDelete(i)}}></IconButton>
            <IconButton
            icon="pencil"
            onPress={() => navigation.push('form-cursos', {id : i, obj : c})}></IconButton>
          </Card.Actions>
          </Card>
          </>
        ))
      }
      <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Content>
              <Text variant="bodyMedium">Deseja realmente excluir?</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={excluir}>Sim</Button>
              <Button onPress={hideDialog}>Não</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
    </View>
      </ScrollView>
      <FAB
    icon="plus"
    size="small"
    style={{position: 'absolute', right: 0, bottom: 0}}
    onPress={() => navigation.push('form-cursos')}
  /> 
    </>
  )
}

export default Cursos