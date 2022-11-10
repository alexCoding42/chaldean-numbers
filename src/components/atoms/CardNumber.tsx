import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/colors';
import { IChaldeanNumber } from '../../types';
import { NumberDetailsNavigationProp } from '../../navigation/types';

const { width } = Dimensions.get('screen');

export default function CardNumber({ item }: { item: IChaldeanNumber }) {
  const navigation = useNavigation<NumberDetailsNavigationProp>();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      key={item.id}
      onPress={() => navigation.navigate('Details', item)}
    >
      <View style={styles.card}>
        <Text style={styles.cardTextNumericValue}>{item.chaldean}</Text>
        <Text style={styles.cardTextName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    width: width / 2.5,
    height: 80,
    backgroundColor: Colors.white.default,
    marginBottom: 10,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTextNumericValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black.default,
  },
  cardTextName: {
    fontSize: 12,
    color: Colors.black.default,
    textAlign: 'center',
  },
});
