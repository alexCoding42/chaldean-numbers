import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DateScreen, NameScreen } from '../screens';
import { BluredTabBar, TabBarIcon } from '../components/atoms';
import { Colors } from '../theme/colors';
import NumberNavigator from './NumberNavigator';
import { BottomTabNavigatorParamList } from './types';
import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='Date'
      tabBar={(props) => <BluredTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'transparent',
          borderTopColor: '#66666666',
          elevation: 0.5,
        },
        tabBarActiveTintColor: Colors.white.tabIconSelected,
        tabBarInactiveTintColor: Colors.purple.tabIconUnselected,
      }}
    >
      <Tab.Screen
        name='Date'
        component={DateScreen}
        options={{
          title: 'Date',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='calendar' color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Name'
        component={NameScreen}
        options={{
          title: 'Name',
          tabBarIcon: ({ color }) => <TabBarIcon name='pencil' color={color} />,
        }}
      />
      <Tab.Screen
        name='NumberList'
        component={NumberNavigator}
        options={{
          title: 'List',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='list-ol' color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='My profile'
        component={ProfileNavigator}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name='user' color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
