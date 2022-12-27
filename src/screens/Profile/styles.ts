import { Spacings } from './../../theme/layouts';
import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: Spacings.SM,
    paddingBottom: Spacings.M,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white.default,
    marginBottom: Spacings.XS,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    color: Colors.white.default,
  },
  row: {
    flexDirection: 'row',
    marginBottom: Spacings.XS,
  },
  sectionText: {
    color: Colors.white.default,
    marginLeft: Spacings.SM,
  },
  infoBoxWrapper: {
    borderBottomColor: Colors.white.absolute,
    borderBottomWidth: 1,
    borderTopColor: Colors.white.absolute,
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoBoxText: {
    color: Colors.white.default,
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: Spacings.S,
    paddingHorizontal: Spacings.SM,
  },
  menuItemText: {
    color: Colors.white.default,
    marginLeft: Spacings.SM,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  deleteWrapper: {
    marginTop: Spacings.M,
  },
  deleteText: {
    color: Colors.red.default,
    textAlign: 'center',
    opacity: 0.8,
  },
});

export default styles;
