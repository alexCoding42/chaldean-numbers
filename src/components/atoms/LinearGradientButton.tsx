import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Gradients } from '../../theme/colors';
import { Borders } from '../../theme/layouts';

type LinearGradientButtonProps = {
  onPress: () => void;
  buttonText: string;
  isLoading?: boolean;
  colors?: string[];
};

export default function LinearGradientButton({
  onPress,
  buttonText,
  isLoading = false,
  colors = Gradients.green.default,
}: LinearGradientButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={isLoading}
    >
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0.75 }}
        end={{ x: 1, y: 0.25 }}
        style={styles.linearGradientBtn}
      >
        {isLoading ? (
          <ActivityIndicator color={Colors.white.default} />
        ) : (
          <Text style={styles.btnText}>{buttonText}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  linearGradientBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Borders.RADIUS.BUTTON,
    height: Borders.RADIUS.BUTTON,
  },
  btnText: {
    fontWeight: 'bold',
    color: Colors.white.default,
  },
});
