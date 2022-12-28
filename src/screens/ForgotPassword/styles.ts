import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';
import { Borders, Spacings } from '../../theme/layouts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Spacings.M,
    paddingHorizontal: Spacings.SM,
  },
  textInputTitle: {
    color: Colors.white.default,
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 15,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  input: {
    flex: 1,
    height: Borders.RADIUS.BUTTON,
    backgroundColor: Colors.black.withOpacity,
    color: Colors.white.default,
    fontWeight: '500',
    borderRadius: Borders.RADIUS.BUTTON,
    flexDirection: 'row',
    paddingHorizontal: Spacings.SM,
    alignItems: 'center',
    elevation: 12,
    shadowColor: Colors.black.default,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  clearIcon: {
    position: 'absolute',
    right: 0,
    paddingHorizontal: 10,
  },
});

export default styles;
