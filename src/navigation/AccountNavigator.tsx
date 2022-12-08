import { useAuthenticationStatus } from '@nhost/react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoadingSpinner } from '../components/atoms';
import { ProfileScreen } from '../screens';
import NotAuthenticatedNavigator from './NotAuthenticatedNavigator';
import { AccountStackParamList } from './types';

const AccountStack = createNativeStackNavigator<AccountStackParamList>();

export default function AccountNavigator() {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <AccountStack.Navigator
      initialRouteName='NotAuthenticatedNavigator'
      screenOptions={{ headerShown: false }}
    >
      {isAuthenticated ? (
        <AccountStack.Screen name='Profile' component={ProfileScreen} />
      ) : (
        <AccountStack.Screen
          name='NotAuthenticatedNavigator'
          component={NotAuthenticatedNavigator}
        />
      )}
    </AccountStack.Navigator>
  );
}
