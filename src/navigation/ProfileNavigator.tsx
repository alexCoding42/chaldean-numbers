import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AccountScreen, FavoritesScreen, ProfileScreen } from '../screens';
import { Colors } from '../theme/colors';
import HeaderBackground from './components/HeaderBackground';
import { ProfileStackParamList } from './types';

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

const defaultOptions = {
  headerTitleStyle: { color: Colors.white.default },
  headerTintColor: Colors.white.default,
  headerBackground: () => <HeaderBackground />,
};

export default function NotAuthenticatedNavigator() {
  return (
    <ProfileStack.Navigator
      initialRouteName='Profile'
      screenOptions={defaultOptions}
    >
      <ProfileStack.Screen name='Profile' component={ProfileScreen} />
      <ProfileStack.Screen name='Account' component={AccountScreen} />
      <ProfileStack.Screen name='Favorites' component={FavoritesScreen} />
    </ProfileStack.Navigator>
  );
}
