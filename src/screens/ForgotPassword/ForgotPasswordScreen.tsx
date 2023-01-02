import { MaterialIcons } from '@expo/vector-icons';
import { useResetPassword } from '@nhost/react';
import { useNavigation } from '@react-navigation/native';
import { useRef, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  LinearGradientBackground,
  LinearGradientButton,
} from '../../components/atoms';
import { ForgotPasswordNavigationProp } from '../../navigation/types';
import { Colors } from '../../theme/colors';
import styles from './styles';

export default function ForgotPasswordScreen() {
  const navigation = useNavigation<ForgotPasswordNavigationProp>();

  const { resetPassword, isLoading } = useResetPassword();
  const emailInputRef = useRef<TextInput>(null);
  const [email, setEmail] = useState('');

  async function sendResetPassword() {
    if (email === '') {
      Alert.alert('Error', 'Please provide an email.');
      return;
    }

    try {
      const res = await resetPassword(email);

      if (res.isError) {
        throw new Error(res?.error?.message);
      } else {
        Alert.alert(
          'Success',
          'Please check your mailbox and follow the reset link to change your password.'
        );
        navigation.navigate('Sign in');
      }
    } catch (error) {
      Alert.alert('Error', (error as Error).message);
    }
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
                  onSubmitEditing={sendResetPassword}
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
              <LinearGradientButton
                style={{ marginTop: 20 }}
                buttonText='Send reset password'
                onPress={sendResetPassword}
                isLoading={isLoading}
              />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </LinearGradientBackground>
  );
}
