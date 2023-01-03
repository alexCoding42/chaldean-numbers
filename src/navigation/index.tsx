import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { ErrorScreen, ModalScreen, NotFoundScreen } from '../screens';

import { RootNavigatorStackParamList } from './types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import { Colors } from '../theme/colors';

const Stack = createNativeStackNavigator<RootNavigatorStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='NotFound'
          component={NotFoundScreen}
          options={{ title: 'Oops!' }}
        />
        <Stack.Screen
          name='Error'
          component={ErrorScreen}
          options={{
            headerStyle: {
              backgroundColor: Colors.purple.dark,
            },
            headerTitleStyle: { color: Colors.white.default },
            headerBackVisible: false,
          }}
        />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name='Modal' component={ModalScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
