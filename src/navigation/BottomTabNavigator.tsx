import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DateScreen, NameScreen } from '../screens';
import { RootTabParamList, RootTabScreenProps } from './types';
import { BluredTabBar, TabBarIcon } from '../components/atoms';
import { Colors } from '../theme/colors';

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
          elevation: 0,
        },
        tabBarActiveTintColor: Colors.white.active,
        tabBarInactiveTintColor: Colors.grey.inactive,
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
    </BottomTab.Navigator>
  );
}
