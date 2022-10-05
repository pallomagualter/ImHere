import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export function Home() {

  function handleParticipantAdd() {
    console.log("Você clicou no botão adicionar participante.");
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 5 de outubro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Nome do participante"
          placeholderTextColor= "#6B6B6B"
        />
    
        <TouchableOpacity 
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}