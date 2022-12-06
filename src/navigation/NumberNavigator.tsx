import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { NumberDetailsScreen, NumberListScreen } from '../screens';
import { Colors } from '../theme/colors';
import { NumberStackParamList } from './types';

const NumberStack = createNativeStackNavigator<NumberStackParamList>();

export default function NumberNavigator() {
  return (
    <NumberStack.Navigator
      initialRouteName='List'
      screenOptions={{
        headerTitleStyle: { color: 'white' },
        headerTintColor: Colors.white.default,
        headerBackground: () => (
          <LinearGradient
            colors={[Colors.grey.light, Colors.grey.dark]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1 }}
          />
        ),
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
