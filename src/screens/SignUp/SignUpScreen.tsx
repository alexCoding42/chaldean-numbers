import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { createRef, useState } from 'react';
import {
  LinearGradientBackground,
  LinearGradientButton,
} from '../../components/atoms';
import { showAlert } from '../../utils/alert';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../theme/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { AccountStackScreenProps } from '../../navigation/types';
import styles from './styles';
import { useSignUpEmailPassword } from '@nhost/react';

export default function SignUpScreen({
  navigation,
}: AccountStackScreenProps<'SignUp'>) {
  const emailInputRef = createRef<TextInput>();
  const passwordInputRef = createRef<TextInput>();
  const confirmPasswordInputRef = createRef<TextInput>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { signUpEmailPassword, isLoading, isSuccess } =
    useSignUpEmailPassword();

  const handleSignUp = async () => {
    try {
      if (!email || !password || !confirmPassword) {
        showAlert('You must fill all fields');
        return;
      } else if (password !== confirmPassword) {
        showAlert("Passwords don't match");
        return;
      }
      const res = await signUpEmailPassword(email.trim(), password.trim(), {
        allowedRoles: ['user'],
      });
      if (res.isError) {
        throw new Error(res?.error?.message);
      } else {
        navigation.navigate('Login');
      }
    } catch (error) {
      showAlert((error as Error).message);
    }
  };

  return (
    <LinearGradientBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <SafeAreaView style={styles.safeAreaViewContainer}>
            <View style={styles.container}>
              <Text style={styles.title}>Create a new account</Text>
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
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.signUpText}>
                  Already have an account? Login now
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </LinearGradientBackground>
  );
}
