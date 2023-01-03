import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '../../theme/colors';
import { Spacings } from '../../theme/layouts';

export default function Divider() {
  return (
    <View
      style={{
        width: '100%',
        margin: Spacings.S,
        borderColor: Colors.white.default,
        borderWidth: StyleSheet.hairlineWidth,
      }}
    ></View>
  );
}
