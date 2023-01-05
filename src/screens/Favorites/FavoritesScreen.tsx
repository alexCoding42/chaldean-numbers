import { Text, FlatList, View, Alert } from 'react-native';
import React, { useEffect } from 'react';
import {
  LinearGradientBackground,
  LoadingSpinner,
} from '../../components/atoms';
import { IFavorite } from '../../types';
import styles from './styles';
import { useQuery } from '@apollo/client';
import { GET_FAVORITES } from '../../graphql/queries';
import { useFocusEffect } from '@react-navigation/native';
import { useUserData } from '@nhost/react';
import { Gradients } from '../../theme/colors';
import { LinearGradient } from 'expo-linear-gradient';

export default function FavoritesScreen() {
  const user = useUserData();
  const { data, loading, error, refetch } = useQuery(GET_FAVORITES, {
    variables: { userId: user?.id },
  });

  useFocusEffect(() => {
    refetch();
  });

  if (error) {
    return Alert.alert(
      'Error',
      'An error occurred while fetching favorites. Please try again or contact the support.'
    );
  }

  let names = [];
  let dates = [];

  if (data) {
    names = data.favorites.filter((fav: IFavorite) => fav.type === 'name');
    dates = data.favorites.filter((fav: IFavorite) => fav.type === 'date');
  }

  const renderFavoriteItem = (item: IFavorite) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemValue}>{item.value}</Text>
    </View>
  );

  return (
    <LinearGradientBackground>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <View>
            <LinearGradient
              colors={Gradients.yellow.default}
              start={{ x: 0.7, y: 0 }}
              end={{ x: 0.7, y: 1 }}
            >
              <Text style={styles.favoriteCategoryName}>Names</Text>
            </LinearGradient>
            {names.length > 0 ? (
              <FlatList
                data={names}
                renderItem={({ item }) => renderFavoriteItem(item)}
              />
            ) : (
              <Text style={styles.noFav}>No favorites</Text>
            )}
          </View>
          <View>
            <LinearGradient
              colors={Gradients.yellow.default}
              start={{ x: 0.7, y: 0 }}
              end={{ x: 0.7, y: 1 }}
            >
              <Text style={styles.favoriteCategoryName}>Dates</Text>
            </LinearGradient>
            {dates.length > 0 ? (
              <FlatList
                data={dates}
                renderItem={({ item }) => renderFavoriteItem(item)}
              />
            ) : (
              <Text style={styles.noFav}>No favorites</Text>
            )}
          </View>
        </>
      )}
    </LinearGradientBackground>
  );
}
