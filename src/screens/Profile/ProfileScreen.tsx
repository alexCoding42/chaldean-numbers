import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import {
  LinearGradientBackground,
  LinearGradientButton,
} from '../../components/atoms';
import { useSignOut, useUserData } from '@nhost/react';

export default function ProfileScreen() {
  const user = useUserData();
  const { signOut } = useSignOut();
  console.log(user);
  return (
    <LinearGradientBackground>
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>
          Profile Screen you are authenticated!
        </Text>
        <LinearGradientButton buttonText='Logout' onPress={signOut} />
      </View>
    </LinearGradientBackground>
  );
}
