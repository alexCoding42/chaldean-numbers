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
import React, { createRef, useState } from 'react';
import {
  LinearGradientBackground,
  LinearGradientButton,
} from '../../components/atoms';
import { Colors } from '../../theme/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { SignUpNavigationProp } from '../../navigation/types';
import styles from './styles';
import { useSignUpEmailPassword } from '@nhost/react';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
  const navigation = useNavigation<SignUpNavigationProp>();

  const usernameInputRef = createRef<TextInput>();
  const emailInputRef = createRef<TextInput>();
  const passwordInputRef = createRef<TextInput>();
  const confirmPasswordInputRef = createRef<TextInput>();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { signUpEmailPassword, isLoading } = useSignUpEmailPassword();

  const handleSignUp = async () => {
    try {
      if (!username || !email || !password || !confirmPassword) {
        Alert.alert('Error', 'All fields must be filled');
        return;
      } else if (password !== confirmPassword) {
        Alert.alert('Error', 'Passwords do not match');
        return;
      }
      const res = await signUpEmailPassword(email.trim(), password.trim(), {
        displayName: username.trim(),
        allowedRoles: ['user'],
      });
      if (res.isError) {
        throw new Error(res?.error?.message);
      } else {
        Alert.alert(
          'Success',
          'Your account has been created successfully but needs to be verified. Please check your mailbox and follow the verification link to verify your email.'
        );
        navigation.navigate('Sign in');
      }
    } catch (error) {
      Alert.alert('Error', (error as Error).message);
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
              <Text style={styles.textInputTitle}>Username</Text>
              <View style={styles.textInputContainer}>
                <TextInput
                  ref={usernameInputRef}
                  returnKeyType='next'
                  keyboardType='default'
                  placeholder='Username'
                  placeholderTextColor={Colors.grey.tabIconUnselected}
                  autoCapitalize='none'
                  style={styles.input}
                  value={username}
                  onChangeText={(value) => setUsername(value)}
                  onSubmitEditing={() => emailInputRef.current?.focus()}
                  blurOnSubmit={false}
                />
                <TouchableOpacity
                  style={styles.clearIcon}
                  onPress={() => setUsername('')}
                >
                  <MaterialIcons
                    color={Colors.white.default}
                    name='clear'
                    size={20}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.textInputTitle}>Email</Text>
              <View style={styles.textInputContainer}>
                <TextInput
                  ref={emailInputRef}
                  returnKeyType='next'
                  keyboardType='email-address'
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
                  returnKeyType='next'
                  placeholder='your password'
                  placeholderTextColor={Colors.grey.tabIconUnselected}
                  autoCapitalize='none'
                  style={styles.input}
                  value={password}
                  onChangeText={(value) => setPassword(value)}
                  onSubmitEditing={() =>
                    confirmPasswordInputRef.current?.focus()
                  }
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
              <Text style={styles.textInputTitle}>Confirm password</Text>
              <View style={styles.textInputContainer}>
                <TextInput
                  ref={confirmPasswordInputRef}
                  secureTextEntry
                  returnKeyType='done'
                  placeholder='your confirmed password'
                  placeholderTextColor={Colors.grey.tabIconUnselected}
                  autoCapitalize='none'
                  style={styles.input}
                  value={confirmPassword}
                  onChangeText={(value) => setConfirmPassword(value)}
                  onSubmitEditing={handleSignUp}
                  blurOnSubmit={false}
                />
                <TouchableOpacity
                  style={styles.clearIcon}
                  onPress={() => setConfirmPassword('')}
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
                buttonText='Sign Up'
                onPress={handleSignUp}
                isLoading={isLoading}
              />
              <TouchableOpacity onPress={() => navigation.navigate('Sign in')}>
                <Text style={styles.signUpText}>
                  Already have an account? Login now
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </LinearGradientBackground>
  );
}
