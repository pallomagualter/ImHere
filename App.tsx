import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Nome do evento
      </Text>
      <Text style={styles.text}>
        Sexta, 5 de outubro de 2022.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  title: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 48
  },
  text: {
    color: '#6B6B6B',
    fontSize: 16,
  },
});
