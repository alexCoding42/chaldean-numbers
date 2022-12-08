import { View, Text } from 'react-native';
import React from 'react';
import { LinearGradientBackground } from '../../components/atoms';
import { Colors } from '../../theme/colors';

export default function PrivacyPolicyScreen() {
  return (
    <LinearGradientBackground>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: Colors.white.default }}>Privacy Policy</Text>
      </View>
    </LinearGradientBackground>
  );
}
