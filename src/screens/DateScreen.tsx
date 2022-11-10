import { Text, StyleSheet, View } from 'react-native';
import { RootTabScreenProps } from '../navigation/types';

export default function DateScreen({ navigation }: RootTabScreenProps<'Date'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Date Screen</Text>
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
