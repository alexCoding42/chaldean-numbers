import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  LegalInformationScreen,
  LoginScreen,
  NotAuthenticatedScreen,
  PrivacyPolicyScreen,
  SignUpScreen,
} from '../screens';
import { Colors } from '../theme/colors';
import HeaderBackground from './components/HeaderBackground';
import { NotAuthenticatedStackParamList } from './types';

const NotAuthenticatedStack =
  createNativeStackNavigator<NotAuthenticatedStackParamList>();

const defaultOptions = {
  headerTitleStyle: { color: Colors.white.default },
  headerTintColor: Colors.white.default,
  headerBackground: () => <HeaderBackground />,
};

export default function NotAuthenticatedNavigator() {
  return (
    <NotAuthenticatedStack.Navigator initialRouteName='NotAuthenticated'>
      <NotAuthenticatedStack.Screen
        name='NotAuthenticated'
        component={NotAuthenticatedScreen}
        options={{ headerShown: false }}
      />
      <NotAuthenticatedStack.Screen
        name='Login'
        component={LoginScreen}
        options={{
          headerShown: true,
          headerTitle: 'Login',
          ...defaultOptions,
        }}
      />
      <NotAuthenticatedStack.Screen
        name='SignUp'
        component={SignUpScreen}
        options={{
          headerShown: true,
          headerTitle: 'SignUp',
          ...defaultOptions,
        }}
      />
      <NotAuthenticatedStack.Screen
        name='LegalInformation'
        component={LegalInformationScreen}
        options={{
          headerShown: true,
          headerTitle: 'Legal Information',
          ...defaultOptions,
        }}
      />
      <NotAuthenticatedStack.Screen
        name='PrivacyPolicy'
        component={PrivacyPolicyScreen}
        options={{
          headerShown: true,
          headerTitle: 'Privacy Policy',
          ...defaultOptions,
        }}
      />
    </NotAuthenticatedStack.Navigator>
  );
}
