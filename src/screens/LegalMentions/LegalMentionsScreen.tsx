import { View, Text } from 'react-native';
import React from 'react';
import { Colors } from '../../theme/colors';
import { LinearGradientBackground } from '../../components/atoms';

export default function LegalMentionsScreen() {
  return (
    <LinearGradientBackground>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: Colors.white.default }}>Legal Mentions</Text>
      </View>
    </LinearGradientBackground>
  );
}
