import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  LegalInformationScreen,
  NotAuthenticatedScreen,
  PrivacyPolicyScreen,
  SignUpScreen,
} from '../screens';
import SignInScreen from '../screens/SignIn/SignInScreen';
import { Colors } from '../theme/colors';
import HeaderBackground from './components/HeaderBackground';
import { AuthStackNavigatorParamList } from './types';

const Stack = createNativeStackNavigator<AuthStackNavigatorParamList>();

const defaultOptions = {
  headerTitleStyle: { color: Colors.white.default },
  headerTintColor: Colors.white.default,
  headerBackground: () => <HeaderBackground />,
};

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Not authenticated'
        component={NotAuthenticatedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Sign in'
        component={SignInScreen}
        options={{
          headerShown: true,
          headerTitle: 'Sign in',
          ...defaultOptions,
        }}
      />
      <Stack.Screen
        name='Sign up'
        component={SignUpScreen}
        options={{
          headerShown: true,
          headerTitle: 'Sign up',
          ...defaultOptions,
        }}
      />
      <Stack.Screen
        name='Legal information'
        component={LegalInformationScreen}
        options={{
          headerShown: true,
          headerTitle: 'Legal Information',
          ...defaultOptions,
        }}
      />
      <Stack.Screen
        name='Privacy policy'
        component={PrivacyPolicyScreen}
        options={{
          headerShown: true,
          headerTitle: 'Privacy Policy',
          ...defaultOptions,
        }}
      />
    </Stack.Navigator>
  );
}
