import { Text, StyleSheet, View } from 'react-native';
import { LinearGradientBackground } from '../components/atoms';
import { RootTabScreenProps } from '../navigation/types';
import { Colors } from '../theme/colors';

export default function DateScreen({ navigation }: RootTabScreenProps<'Date'>) {
  return (
    <LinearGradientBackground>
      <View style={styles.container}>
        <Text style={styles.title}>Date Screen</Text>
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
