import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';
import { Spacings } from '../../theme/layouts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    paddingHorizontal: Spacings.S,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.white.default,
    paddingVertical: Spacings.XS,
  },
  email: {
    color: Colors.yellow.light,
  },
});

export default styles;
