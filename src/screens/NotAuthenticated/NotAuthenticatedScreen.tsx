import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  Divider,
  LinearGradientBackground,
  LinearGradientButton,
  OutlineButton,
} from '../../components/atoms';
import { NotAuthenticatedStackScreenProps } from '../../navigation/types';
import styles from './styles';

const NotAuthenticatedScreen = ({
  navigation,
}: NotAuthenticatedStackScreenProps<'NotAuthenticated'>) => {
  return (
    <LinearGradientBackground>
      <View style={styles.container}>
        <Text style={styles.title}>
          Login into your account or create a new account to retrieve your
          favorites and access to your settings
        </Text>
        <LinearGradientButton
          style={styles.button}
          buttonText='Login'
          onPress={() => navigation.navigate('Login')}
        />
        <OutlineButton
          style={styles.button}
          buttonText='Create a new account'
          onPress={() => navigation.navigate('SignUp')}
        />
        <Divider />
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigation.navigate('LegalInformation')}
        >
          <Text style={styles.text}>Legal information</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigation.navigate('PrivacyPolicy')}
        >
          <Text style={styles.text}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </LinearGradientBackground>
  );
};

export default NotAuthenticatedScreen;
