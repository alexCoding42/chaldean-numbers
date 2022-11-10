import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DateScreen, NameScreen, NumberListScreen } from '../screens';
import { RootTabParamList, RootTabScreenProps } from './types';
import { BluredTabBar, TabBarIcon } from '../components/atoms';
import { Colors } from '../theme/colors';
import AccountScreen from '../screens/AccountScreen';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName='Date'
      tabBar={(props) => <BluredTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'transparent',
          borderTopColor: '#66666666',
          elevation: 1,
        },
        tabBarActiveTintColor: Colors.white.tabIconSelected,
        tabBarInactiveTintColor: Colors.grey.tabIconUnselected,
      }}
    >
      <BottomTab.Screen
        name='Date'
        component={DateScreen}
        options={({ navigation }: RootTabScreenProps<'Date'>) => ({
          title: 'Date',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='calendar' color={color} />
          ),
        })}
      />
      <BottomTab.Screen
        name='Name'
        component={NameScreen}
        options={{
          title: 'Name',
          tabBarIcon: ({ color }) => <TabBarIcon name='pencil' color={color} />,
        }}
      />
      <BottomTab.Screen
        name='NumberList'
        component={NumberListScreen}
        options={{
          title: 'List',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='list-ol' color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Account'
        component={AccountScreen}
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <TabBarIcon name='user' color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
