import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../theme/colors';

type LinearGradientBackgroundProps = {
  colors?: string[];
  children?: React.ReactNode;
};

export default function LinearGradientBackground({
  colors = [Colors.purple.light, Colors.purple.dark],
  children,
}: LinearGradientBackgroundProps) {
  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.linearGradientStyle}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradientStyle: {
    flex: 1,
  },
});
