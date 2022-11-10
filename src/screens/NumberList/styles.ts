import { StyleSheet, StatusBar, Platform } from 'react-native';
import { Colors } from '../../theme/colors';

const STATUS_BAR_HEIGHT = StatusBar.currentHeight;
const isIos = Platform.OS === 'ios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentView: {
    flex: 1,
  },
  title: {
    marginTop: isIos ? 50 : STATUS_BAR_HEIGHT,
    margin: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white.default,
  },
});

export default styles;
