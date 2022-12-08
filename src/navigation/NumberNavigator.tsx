import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NumberDetailsScreen, NumberListScreen } from '../screens';
import { Colors } from '../theme/colors';
import HeaderBackground from './components/HeaderBackground';
import { NumberStackParamList } from './types';

const NumberStack = createNativeStackNavigator<NumberStackParamList>();

export default function NumberNavigator() {
  return (
    <NumberStack.Navigator
      initialRouteName='List'
      screenOptions={{
        headerTitleStyle: { color: 'white' },
        headerTintColor: Colors.white.default,
        headerBackground: () => <HeaderBackground />,
      }}
    >
      <NumberStack.Screen
        name='List'
        component={NumberListScreen}
        options={{
          headerTitle: 'List of chaldean numbers',
        }}
      />
      <NumberStack.Screen
        name='Details'
        component={NumberDetailsScreen}
        options={{
          headerTitle: 'Details',
          headerBackTitleVisible: true,
        }}
      />
    </NumberStack.Navigator>
  );
}
