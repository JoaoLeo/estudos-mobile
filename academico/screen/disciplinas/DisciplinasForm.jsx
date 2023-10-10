import React from 'react'

const DisciplinasForm = () => {
  const [dados, setDados] = useState({});

  function handleChange(valor, campo){
    setDados({...dados, [campo]: valor})
  }

  function salvar(){
   console.log(dados);
  }
  
  return (
    <>
    <ScrollView style={{
      marginTop: 5
    }}> 
    <Text> Formulário de disciplinas </Text>
    <TextInput style={{ 
      marginTop: 5}} 
      label="Duração" 
      keyboardType='decimal-pad'
      mode='outlined' 
      value={dados.id}  
      onChangeText={(valor) => handleChange(valor, "id")}
      />
    <TextInput style={{
      marginTop: 5
    }} 
    label="Nome" 
    mode='outlined' 
    value={dados.nome}
    onChangeText={(valor) => handleChange(valor, "nome")}
    />

    <TextInput style={{ 
      marginTop: 5 }} label="curso_id"
       mode='outlined' 
       value={dados.curso_id}
       onChangeText={(valor) => handleChange(valor, "curso_id")}
       />
    </ScrollView>
    <Button onPress={salvar}> Enviar </Button>
    </>
  )
}

export default DisciplinasForm