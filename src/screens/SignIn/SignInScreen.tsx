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
import { SignInNavigationProp } from '../../navigation/types';
import { useNhostClient, useSignInEmailPassword } from '@nhost/react';
import { useNavigation } from '@react-navigation/native';

export default function SignInScreen() {
  const navigation = useNavigation<SignInNavigationProp>();

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signInEmailPassword, isLoading } = useSignInEmailPassword();
  const { auth } = useNhostClient();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'All fields must be filled');
      return;
    }

    try {
      const res = await signInEmailPassword(email.trim(), password.trim());
      if (res.needsEmailVerification) {
        Alert.alert(
          'Error',
          'Your account is not verified. Please check your mailbox and follow the verification link to verify your email. If you did not receive any email, or if the link has expired you can ask for a new confirmation link.',
          [
            {
              text: 'Ask for a new confirmation link',
              onPress: () => sendNewConfirmationLink(),
            },
            { text: 'Close', onPress: () => {} },
          ]
        );
        return;
      } else if (res.isError) {
        throw new Error(res?.error?.message);
      }
    } catch (error) {
      Alert.alert('Error', (error as Error).message);
    }
  };

  const sendNewConfirmationLink = async () => {
    try {
      const res = await auth.sendVerificationEmail({
        email: email,
      });
      if (!res.error) {
        Alert.alert(
          'Success',
          'A new confirmation link has been sent, please check your email.'
        );
        return;
      } else {
        throw new Error(res?.error?.message);
      }
    } catch (error) {
      Alert.alert('Error', (error as Error).message);
      return;
    }
  };

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
                  placeholderTextColor={Colors.purple.tabIconUnselected}
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
                  placeholderTextColor={Colors.purple.tabIconUnselected}
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
              <TouchableOpacity onPress={() => navigation.navigate('Sign up')}>
                <Text style={styles.signUpText}>
                  Don't have an account yet? Sign Up now
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Forgot password')}
              >
                <Text style={styles.forgotPasswordText}>
                  I have forgotten my password
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </LinearGradientBackground>
  );
}
