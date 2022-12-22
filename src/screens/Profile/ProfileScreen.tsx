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
import { useQuery } from '@apollo/client';
import { GET_FAVORITES } from '../../graphql/queries';
import { useFocusEffect } from '@react-navigation/native';
import { IFavorite } from '../../types';

export default function ProfileScreen({
  navigation,
}: ProfileStackScreenProps<'Profile'>) {
  const user = useUserData();
  const { signOut } = useSignOut();

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
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes, delete my account',
          style: 'destructive',
          onPress: () => console.log('OK Pressed'),
        },
      ]
    );
  };

  return (
    <LinearGradientBackground>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <SafeAreaView style={styles.container}>
          <View style={styles.userInfoSection}>
            <View style={styles.topContainer}>
              <Image
                source={{
                  uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dbe53e10-e9b4-4906-b687-51ca2edb6e65/dfbh8gh-ec2aba2e-689a-49b3-8eb9-f8e64e445103.jpg/v1/fill/w_1280,h_1526,q_75,strp/concept_art_of_kang_the_conqueror__mcu__by_matuta2002_dfbh8gh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUyNiIsInBhdGgiOiJcL2ZcL2RiZTUzZTEwLWU5YjQtNDkwNi1iNjg3LTUxY2EyZWRiNmU2NVwvZGZiaDhnaC1lYzJhYmEyZS02ODlhLTQ5YjMtOGViOS1mOGU2NGU0NDUxMDMuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.n87qcTWt1_ethFURFhReN9nLlFu1EqDjPuHEyN3xvyA',
                }}
                style={styles.avatar}
              />
              <View style={styles.displayNameContainer}>
                <Text style={styles.title}>{user?.displayName}</Text>
              </View>
            </View>
          </View>

          <View style={styles.userInfoSection}>
            <View style={styles.row}>
              <MaterialIcons
                name='email'
                color={Colors.green.light}
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
                  color={Colors.green.light}
                  size={25}
                />
                <Text style={styles.menuItemText}>Your Favorites</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('PrivacyPolicy')}
            >
              <View style={styles.menuItem}>
                <MaterialIcons
                  name='policy'
                  color={Colors.green.light}
                  size={25}
                />
                <Text style={styles.menuItemText}>Privacy Policy</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('LegalInformation')}
            >
              <View style={styles.menuItem}>
                <FontAwesome
                  name='legal'
                  color={Colors.green.light}
                  size={25}
                />
                <Text style={styles.menuItemText}>Legal Information</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={signOut}>
              <View style={styles.menuItem}>
                <MaterialIcons
                  name='logout'
                  color={Colors.green.light}
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
