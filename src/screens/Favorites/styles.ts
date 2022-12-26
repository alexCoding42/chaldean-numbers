import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';
import { Spacings } from '../../theme/layouts';

const styles = StyleSheet.create({
  itemContainer: {
    padding: Spacings.XS,
  },
  itemValue: {
    color: Colors.white.default,
  },
  favoriteCategoryName: {
    backgroundColor: Colors.green.light,
    padding: Spacings.XS,
    color: Colors.white.default,
    fontWeight: '600',
  },
  noFav: {
    padding: Spacings.XS,
    color: Colors.white.default,
  },
});

export default styles;
