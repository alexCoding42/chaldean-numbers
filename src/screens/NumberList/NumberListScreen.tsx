import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import {
  CardNumber,
  LinearGradientBackground,
  LoadingSpinner,
} from '../../components/atoms';

import { RootTabScreenProps } from '../../navigation/types';
import { IChaldeanNumber } from '../../types';
import { showAlert } from '../../utils/alert';
import { getNumberList } from './queries';
import styles from './styles';

export default function NumberListScreen({
  navigation,
}: RootTabScreenProps<'NumberList'>) {
  const tabBarHeight = useBottomTabBarHeight();
  const { data, loading, error } = useQuery(getNumberList);

  if (error) {
    console.warn(error);
    navigation.navigate('Error', {
      errorTitle: 'Cannot get data from database',
      errorMessage: 'Try again or contact the support.',
    });
    return null;
  }

  return (
    <LinearGradientBackground>
      <View style={styles.container}>
        <Text style={styles.title}>List of chaldean numbers</Text>
        <View style={styles.contentView}>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <FlatList
              data={data.numbers}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: tabBarHeight }}
              renderItem={({ item }: { item: IChaldeanNumber }) => (
                <CardNumber item={item} />
              )}
            />
          )}
        </View>
      </View>
    </LinearGradientBackground>
  );
}
