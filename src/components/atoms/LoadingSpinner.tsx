import { View, ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '../../theme/colors';

export default function LoadingSpinner() {
  return (
    <View style={styles.loadingView}>
      <ActivityIndicator size='large' color={Colors.white.default} />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
  },
});
