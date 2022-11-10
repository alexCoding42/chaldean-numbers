import { StyleSheet, Text, View } from 'react-native';
import { LinearGradientBackground } from '../components/atoms';
import { Colors } from '../theme/colors';

export default function NameScreen() {
  return (
    <LinearGradientBackground>
      <View style={styles.container}>
        <Text style={styles.title}>Name Screen</Text>
      </View>
    </LinearGradientBackground>
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
    color: Colors.white.default,
  },
});
