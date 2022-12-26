import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  FavoritesScreen,
  LegalInformationScreen,
  PrivacyPolicyScreen,
  ProfileScreen,
} from '../screens';
import { Colors } from '../theme/colors';
import HeaderBackground from './components/HeaderBackground';
import { ProfileStackParamList } from './types';

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

const defaultOptions = {
  headerTitleStyle: { color: Colors.white.default },
  headerTintColor: Colors.white.default,
  headerBackground: () => <HeaderBackground />,
};

export default function ProfileNavigator() {
  return (
    <ProfileStack.Navigator
      initialRouteName='Profile'
      screenOptions={defaultOptions}
    >
      <ProfileStack.Screen name='Profile' component={ProfileScreen} />
      <ProfileStack.Screen name='Favorites' component={FavoritesScreen} />
      <ProfileStack.Screen
        name='PrivacyPolicy'
        component={PrivacyPolicyScreen}
        options={{ title: 'Privacy Policy' }}
      />
      <ProfileStack.Screen
        name='LegalInformation'
        component={LegalInformationScreen}
        options={{ title: 'Legal Information' }}
      />
    </ProfileStack.Navigator>
  );
}
