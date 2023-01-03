import { Image, View, Text, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import styles from './styles';
import {
  LinearGradientBackground,
  LoadingSpinner,
} from '../../components/atoms';
import { useSignOut, useUserData } from '@nhost/react';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../theme/colors';
import { ProfileStackScreenProps } from '../../navigation/types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMutation, useQuery } from '@apollo/client';
import { GET_FAVORITES } from '../../graphql/queries';
import { useFocusEffect } from '@react-navigation/native';
import { IFavorite } from '../../types';
import { DELETE_USER } from './queries';

export default function ProfileScreen({
  navigation,
}: ProfileStackScreenProps<'Profile'>) {
  const user = useUserData();
  const { signOut } = useSignOut();

  const { data, loading, error, refetch } = useQuery(GET_FAVORITES, {
    variables: { userId: user?.id },
  });

  const [deleteUser] = useMutation(DELETE_USER, {
    variables: {
      id: user?.id,
    },
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

  let favoriteNamesCount = 0;
  let favoriteDatesCount = 0;

  if (data) {
    favoriteNamesCount = data.favorites.filter(
      (fav: IFavorite) => fav.type === 'name'
    ).length;
    favoriteDatesCount = data.favorites.filter(
      (fav: IFavorite) => fav.type === 'date'
    ).length;
  }

  const deleteAccount = () => {
    Alert.alert(
      'Warning',
      'You are about to delete your account, this action is permanent you wont be able to retrieve your account and profile settings later. Are you sure you want to do this?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Yes, delete my account',
          style: 'destructive',
          onPress: () => confirmDeleteUser(),
        },
      ]
    );
  };

  const confirmDeleteUser = async () => {
    try {
      const res = await deleteUser();
      if (res.data.deleteUser.id) {
        signOut();
      }
    } catch (error) {
      Alert.alert(
        'Error',
        'An error has occurred. Please try again or contact the support.'
      );
    }
  };

  return (
    <LinearGradientBackground>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <SafeAreaView style={styles.container}>
          <View style={styles.userInfoSection}>
            <Text style={styles.username}>{user?.displayName}</Text>
            <View style={styles.row}>
              <MaterialIcons
                name='email'
                color={Colors.yellow.light}
                size={20}
              />
              <Text style={styles.sectionText}>{user?.email}</Text>
            </View>
          </View>

          <View style={styles.infoBoxWrapper}>
            <View
              style={[
                styles.infoBox,
                {
                  borderRightColor: Colors.white.default,
                  borderRightWidth: 1,
                },
              ]}
            >
              <Text style={styles.infoBoxText}>{favoriteNamesCount}</Text>
              <Text style={styles.infoBoxText}>Name favorites</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoBoxText}>{favoriteDatesCount}</Text>
              <Text style={styles.infoBoxText}>Date favorites</Text>
            </View>
          </View>

          <View style={styles.menuWrapper}>
            <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
              <View style={styles.menuItem}>
                <FontAwesome
                  name='heart-o'
                  color={Colors.yellow.light}
                  size={25}
                />
                <Text style={styles.menuItemText}>Your Favorites</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Privacy policy')}
            >
              <View style={styles.menuItem}>
                <MaterialIcons
                  name='policy'
                  color={Colors.yellow.light}
                  size={25}
                />
                <Text style={styles.menuItemText}>Privacy Policy</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Legal information')}
            >
              <View style={styles.menuItem}>
                <FontAwesome
                  name='legal'
                  color={Colors.yellow.light}
                  size={25}
                />
                <Text style={styles.menuItemText}>Legal Information</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={signOut}>
              <View style={styles.menuItem}>
                <MaterialIcons
                  name='logout'
                  color={Colors.yellow.light}
                  size={25}
                />
                <Text style={styles.menuItemText}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.deleteWrapper}
              onPress={deleteAccount}
            >
              <Text style={styles.deleteText}>Delete your account</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </LinearGradientBackground>
  );
}
