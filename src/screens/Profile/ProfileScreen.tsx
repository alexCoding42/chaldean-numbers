import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import { LinearGradientBackground } from '../../components/atoms';
import { useSignOut, useUserData } from '@nhost/react';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../theme/colors';
import { ProfileStackScreenProps } from '../../navigation/types';

export default function ProfileScreen({
  navigation,
}: ProfileStackScreenProps<'Profile'>) {
  const user = useUserData();
  const { signOut } = useSignOut();

  return (
    <LinearGradientBackground>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('Account')}
        >
          <FontAwesome
            style={styles.icon}
            size={30}
            name='user'
            color={Colors.green.light}
          />
          <Text style={styles.textOption}>My account</Text>
          <MaterialIcons size={30} name='chevron-right' />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('Favorites')}
        >
          <FontAwesome
            style={styles.icon}
            size={30}
            name='heart'
            color={Colors.green.light}
          />
          <Text style={styles.textOption}>My favorites</Text>
          <MaterialIcons size={30} name='chevron-right' />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('LegalInformation')}
        >
          <FontAwesome
            style={styles.icon}
            size={30}
            name='legal'
            color={Colors.green.light}
          />
          <Text style={styles.textOption}>Legal Information</Text>
          <MaterialIcons size={30} name='chevron-right' />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('PrivacyPolicy')}
        >
          <MaterialIcons
            style={styles.icon}
            size={30}
            name='policy'
            color={Colors.green.light}
          />
          <Text style={styles.textOption}>Privacy Policy</Text>
          <MaterialIcons size={30} name='chevron-right' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={signOut}>
          <MaterialIcons
            style={styles.icon}
            size={30}
            name='logout'
            color={Colors.green.light}
          />
          <Text style={styles.textOption}>Logout</Text>
          <MaterialIcons size={30} name='chevron-right' />
        </TouchableOpacity>
      </View>
    </LinearGradientBackground>
  );
}
