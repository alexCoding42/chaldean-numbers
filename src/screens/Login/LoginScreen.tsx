import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import React, { useRef, useState } from 'react';
import {
  LinearGradientBackground,
  LinearGradientButton,
} from '../../components/atoms';
import styles from './styles';
import { Colors } from '../../theme/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { AccountStackScreenProps } from '../../navigation/types';
import { useSignInEmailPassword } from '@nhost/react';

export default function LoginScreen({
  navigation,
}: AccountStackScreenProps<'Login'>) {
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signInEmailPassword, isLoading, isSuccess } =
    useSignInEmailPassword();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'You must fill all the fields');
      return;
    }

    try {
      const res = await signInEmailPassword(email.trim(), password.trim());
      if (res.needsEmailVerification) {
        throw new Error(
          'Your account is not verified yet. Please verify your account first before login, by clicking on the email you received. If you did not receive any email you can ask for a new verification or contact the support.'
        );
      } else if (res.isError) {
        throw new Error(res?.error?.message);
      }
    } catch (error) {
      Alert.alert('Error', (error as Error).message);
    }
  };

  if (isSuccess) {
    navigation.navigate('ProfileNavigator');
  }

  return (
    <LinearGradientBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView>
            <View style={styles.container}>
              <Text style={styles.textInputTitle}>Email</Text>
              <View style={styles.textInputContainer}>
                <TextInput
                  ref={emailInputRef}
                  keyboardType='email-address'
                  returnKeyType='next'
                  placeholder='your.email@gmail.com'
                  placeholderTextColor={Colors.grey.tabIconUnselected}
                  autoCapitalize='none'
                  style={styles.input}
                  value={email}
                  onChangeText={(value) => setEmail(value)}
                  onSubmitEditing={() => passwordInputRef.current?.focus()}
                  blurOnSubmit={false}
                />
                <TouchableOpacity
                  style={styles.clearIcon}
                  onPress={() => setEmail('')}
                >
                  <MaterialIcons
                    color={Colors.white.default}
                    name='clear'
                    size={20}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.textInputTitle}>Password</Text>
              <View style={styles.textInputContainer}>
                <TextInput
                  ref={passwordInputRef}
                  secureTextEntry
                  returnKeyType='done'
                  placeholder='your password'
                  placeholderTextColor={Colors.grey.tabIconUnselected}
                  autoCapitalize='none'
                  style={styles.input}
                  value={password}
                  onChangeText={(value) => setPassword(value)}
                  onSubmitEditing={handleLogin}
                  blurOnSubmit={false}
                />
                <TouchableOpacity
                  style={styles.clearIcon}
                  onPress={() => setPassword('')}
                >
                  <MaterialIcons
                    color={Colors.white.default}
                    name='clear'
                    size={20}
                  />
                </TouchableOpacity>
              </View>
              <LinearGradientButton
                style={{ marginTop: 20 }}
                buttonText='Login'
                onPress={handleLogin}
                isLoading={isLoading}
              />
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signUpText}>
                  Don't have an account yet? Sign Up now
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </LinearGradientBackground>
  );
}
