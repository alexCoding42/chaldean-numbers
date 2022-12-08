import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';
import { Spacings } from '../../theme/layouts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacings.SM,
  },
  title: {
    color: Colors.white.default,
    fontSize: 18,
    textAlign: 'left',
  },
  button: {
    marginTop: Spacings.SM,
    width: '100%',
  },
  text: {
    color: Colors.white.default,
  },
  touchable: {
    alignSelf: 'flex-start',
    marginTop: Spacings.XS,
  },
});

export default styles;
