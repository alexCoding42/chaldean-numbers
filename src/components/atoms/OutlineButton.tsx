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

type OutlineButtonProps = {
  onPress: () => void;
  buttonText: string;
  isLoading?: boolean;
  style?: TouchableOpacity['props']['style'];
};

export default function LinearGradientButton({
  onPress,
  buttonText,
  isLoading = false,
  style,
}: OutlineButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={isLoading}
      style={[styles.button, style]}
    >
      {isLoading ? (
        <ActivityIndicator color={Colors.white.default} />
      ) : (
        <Text style={styles.btnText}>{buttonText}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.yellow.dark,
    borderWidth: 2,
    borderRadius: Borders.RADIUS.BUTTON,
    height: Borders.RADIUS.BUTTON,
  },
  btnText: {
    fontWeight: 'bold',
    color: Colors.white.default,
  },
});
