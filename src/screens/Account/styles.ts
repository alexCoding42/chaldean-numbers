import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';
import { Spacings } from '../../theme/layouts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.white.default,
  },
  deleteContainer: {
    paddingTop: Spacings.SM,
    alignItems: 'center',
  },
  deleteText: {
    color: Colors.red.default,
  },
});

export default styles;
