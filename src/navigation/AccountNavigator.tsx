import { useAuthenticationStatus } from '@nhost/react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoadingSpinner } from '../components/atoms';
import { LoginScreen, ProfileScreen, SignUpScreen } from '../screens';
import { AccountStackParamList } from './types';

const AccountStack = createNativeStackNavigator<AccountStackParamList>();

export default function AccountNavigator() {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <AccountStack.Navigator
      initialRouteName='Login'
      screenOptions={{ headerShown: false }}
    >
      {isAuthenticated ? (
        <AccountStack.Screen name='Profile' component={ProfileScreen} />
      ) : (
        <>
          <AccountStack.Screen name='Login' component={LoginScreen} />
          <AccountStack.Screen name='SignUp' component={SignUpScreen} />
        </>
      )}
    </AccountStack.Navigator>
  );
}
