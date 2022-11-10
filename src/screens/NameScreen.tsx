import { StyleSheet, Text, View } from 'react-native';
import {} from '../components/Themed';

export default function NameScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
