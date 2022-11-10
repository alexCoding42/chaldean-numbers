import { StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { BottomTabBar } from '@react-navigation/bottom-tabs';

export default function BluredTabBar(props: any) {
  return (
    <BlurView
      style={styles.blurView}
      blurType='dark'
      blurAmount={10}
      blurRadius={25}
      overlayColor='transparent'
    >
      <BottomTabBar {...props} />
    </BlurView>
  );
}

const styles = StyleSheet.create({
  blurView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
