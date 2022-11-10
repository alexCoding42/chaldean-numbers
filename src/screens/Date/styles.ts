import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';
import { Borders, Spacings } from '../../theme/layouts';

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacings.SM,
  },
  container: {
    width: '100%',
  },
  title: {
    color: Colors.white.default,
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 30,
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
    paddingHorizontal: Spacings.S,
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
  resultContainer: {
    marginTop: 20,
    flexDirection: 'column',
  },
  resultSection: {
    flexDirection: 'row',
    paddingBottom: 12,
  },
  resultLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white.default,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white.default,
    marginHorizontal: 10,
  },
});

export default styles;
