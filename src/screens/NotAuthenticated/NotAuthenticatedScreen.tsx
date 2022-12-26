import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  Divider,
  LinearGradientBackground,
  LinearGradientButton,
  OutlineButton,
} from '../../components/atoms';
import { NotAuthenticatedNavigationProp } from '../../navigation/types';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const NotAuthenticatedScreen = () => {
  const navigation = useNavigation<NotAuthenticatedNavigationProp>();

  return (
    <LinearGradientBackground>
      <View style={styles.container}>
        <Text style={styles.title}>
          Login into your account or create a new account to retrieve your
          favorites and access to your settings
        </Text>
        <LinearGradientButton
          style={styles.button}
          buttonText='Sign in'
          onPress={() => navigation.navigate('Sign in')}
        />
        <OutlineButton
          style={styles.button}
          buttonText='Create a new account'
          onPress={() => navigation.navigate('Sign up')}
        />
        <Divider />
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigation.navigate('Legal information')}
        >
          <Text style={styles.text}>Legal information</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigation.navigate('Privacy policy')}
        >
          <Text style={styles.text}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </LinearGradientBackground>
  );
};

export default NotAuthenticatedScreen;
