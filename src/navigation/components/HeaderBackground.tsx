import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../theme/colors';

const HeaderBackground = () => {
  return (
    <LinearGradient
      colors={[Colors.grey.light, Colors.grey.dark]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    />
  );
};

export default HeaderBackground;
