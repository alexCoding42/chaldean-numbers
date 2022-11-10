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
  titleContainer: {
    marginTop: Spacings.XS,
    marginBottom: Spacings.M,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.white.default,
    textAlign: 'center',
  },
  sectionContainer: {
    marginBottom: Spacings.M,
  },
  sectionTitle: {
    fontSize: 18,
    color: Colors.white.default,
    fontWeight: '700',
    paddingBottom: Spacings.XS,
  },
  sectionContent: {
    fontSize: 16,
    color: Colors.white.default,
  },
  sectionPhraseTitle: {
    fontSize: 16,
    color: Colors.white.default,
    fontWeight: '600',
    fontStyle: 'italic',
    paddingBottom: Spacings.XS,
  },
});

export default styles;
