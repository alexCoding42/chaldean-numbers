import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { LinearGradientBackground } from '../../components/atoms';
import { RootStackScreenProps } from '../../navigation/types';
import { Colors } from '../../theme/colors';

export default function ErrorScreen({
  route,
  navigation,
}: RootStackScreenProps<'Error'>) {
  const { errorTitle, errorMessage } = route.params;
  return (
    <LinearGradientBackground>
      <View style={styles.container}>
        <Text style={styles.title}>{errorTitle}</Text>
        <Text style={styles.message}>{errorMessage}</Text>
        <TouchableOpacity
          onPress={() => navigation.replace('Root')}
          style={styles.link}
        >
          <Text style={styles.linkText}>Go back to home screen!</Text>
        </TouchableOpacity>
      </View>
    </LinearGradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white.default,
  },
  message: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.white.default,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
