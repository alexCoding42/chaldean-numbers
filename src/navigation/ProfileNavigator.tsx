import { useAuthenticationStatus } from '@nhost/react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoadingSpinner } from '../components/atoms';
import {
  FavoritesScreen,
  LegalInformationScreen,
  PrivacyPolicyScreen,
  ProfileScreen,
} from '../screens';
import { Colors } from '../theme/colors';
import AuthStackNavigator from './AuthStackNavigator';
import HeaderBackground from './components/HeaderBackground';
import { ProfileStackParamList } from './types';

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

const defaultOptions = {
  headerTitleStyle: { color: Colors.white.default },
  headerTintColor: Colors.white.default,
  headerBackground: () => <HeaderBackground />,
};

export default function ProfileNavigator() {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ProfileStack.Navigator>
      {isAuthenticated ? (
        <>
          <ProfileStack.Screen
            name='Profile'
            component={ProfileScreen}
            options={defaultOptions}
          />
          <ProfileStack.Screen
            name='Favorites'
            component={FavoritesScreen}
            options={defaultOptions}
          />
          <ProfileStack.Screen
            name='Privacy policy'
            component={PrivacyPolicyScreen}
            options={{ title: 'Privacy Policy', ...defaultOptions }}
          />
          <ProfileStack.Screen
            name='Legal information'
            component={LegalInformationScreen}
            options={{ title: 'Legal Information', ...defaultOptions }}
          />
        </>
      ) : (
        <ProfileStack.Screen
          name='Account'
          component={AuthStackNavigator}
          options={{ headerShown: false }}
        />
      )}
    </ProfileStack.Navigator>
  );
}
