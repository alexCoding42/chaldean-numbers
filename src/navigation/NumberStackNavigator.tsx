import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NumberDetailsScreen, NumberListScreen } from '../screens';
import { Colors } from '../theme/colors';
import { NumberStackParamList } from './types';

const NumberStack = createNativeStackNavigator<NumberStackParamList>();

export default function NumberStackNavigator() {
  return (
    <NumberStack.Navigator
      initialRouteName='List'
      screenOptions={{ headerShown: false }}
    >
      <NumberStack.Screen name='List' component={NumberListScreen} />
      <NumberStack.Screen
        name='Details'
        component={NumberDetailsScreen}
        options={{
          headerShown: true,
          headerTitle: 'Details',
          headerTitleStyle: { color: 'white' },
          headerBackTitleVisible: true,
          headerTintColor: Colors.white.default,
          headerStyle: { backgroundColor: Colors.black.default },
        }}
      />
    </NumberStack.Navigator>
  );
}
