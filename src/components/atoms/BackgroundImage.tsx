import {
  View,
  ImageBackground,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';

type BackgroundImageProps = {
  source: ImageSourcePropType | undefined;
  children?: React.ReactNode;
};

export default function BackgroundImage({
  source,
  children,
}: BackgroundImageProps) {
  return (
    <ImageBackground style={styles.image} source={source}>
      <View style={styles.darken}>{children}</View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  darken: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
});
