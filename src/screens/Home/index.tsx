import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput } from 'react-native';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 5 de outubro de 2022.
      </Text>

      <TextInput 
        style={styles.input} 
        placeholder="Nome do participante"
        placeholderTextColor= "#6B6B6B"
      />
      <StatusBar style="auto" />
    </View>
  );
}