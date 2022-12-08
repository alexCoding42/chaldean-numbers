import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { LinearGradientBackground } from '../../components/atoms';
import { ProfileStackScreenProps } from '../../navigation/types';
import styles from './styles';

export default function AccountScreen({
  navigation,
}: ProfileStackScreenProps<'Account'>) {
  return (
    <LinearGradientBackground>
      <View style={styles.container}>
        <Text style={styles.title}>Account Screen</Text>
      </View>
      <TouchableOpacity style={styles.deleteContainer}>
        <Text style={styles.deleteText}>Delete my account</Text>
      </TouchableOpacity>
    </LinearGradientBackground>
  );
}
