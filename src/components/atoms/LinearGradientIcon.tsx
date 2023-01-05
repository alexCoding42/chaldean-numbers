import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Gradients } from '../../theme/colors';
import MaskedView from '@react-native-masked-view/masked-view';

type LinearGradientIconProps = {
  icon: any;
  width?: number;
  colors?: string[];
};

export default function LinearGradientIcon({
  icon,
  width = 20,
  colors = Gradients.yellow.default,
}: LinearGradientIconProps) {
  return (
    <View style={{ width: width }}>
      <MaskedView
        style={{ flex: 1 }}
        maskElement={
          <View
            style={{
              backgroundColor: 'transparent',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {icon}
          </View>
        }
      >
        <LinearGradient colors={colors} style={{ flex: 1 }} />
      </MaskedView>
    </View>
  );
}
