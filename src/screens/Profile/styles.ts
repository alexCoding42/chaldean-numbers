import { Spacings, Borders } from './../../theme/layouts';
import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Spacings.XL,
    paddingHorizontal: Spacings.S,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white.absolute,
    padding: Spacings.S,
    borderRadius: Borders.RADIUS.LIST,
    marginVertical: Spacings.XS,
  },
  icon: {
    paddingRight: 14,
  },
  textOption: {
    fontSize: 16,
    marginRight: 'auto',
  },
});

export default styles;
