import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  Divider,
  LinearGradientBackground,
  LinearGradientButton,
  OutlineButton,
} from '../../components/atoms';
import { Colors } from '../../theme/colors';
import { Spacings } from '../../theme/layouts';
import { NotAuthenticatedStackScreenProps } from '../../navigation/types';

const NotAuthenticatedScreen = ({
  navigation,
}: NotAuthenticatedStackScreenProps<'NotAuthenticated'>) => {
  return (
    <LinearGradientBackground>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: Spacings.SM,
        }}
      >
        <Text
          style={{
            color: Colors.white.default,
            fontSize: 18,
            textAlign: 'left',
          }}
        >
          Login into your account or create a new account to retrieve your
          favorites and access to your settings
        </Text>
        <LinearGradientButton
          style={{ marginTop: Spacings.SM, width: '100%' }}
          buttonText='Login'
          onPress={() => navigation.navigate('Login')}
        />
        <OutlineButton
          style={{ marginTop: Spacings.SM, width: '100%' }}
          buttonText='Create a new account'
          onPress={() => navigation.navigate('SignUp')}
        />
        <Divider />
        <TouchableOpacity
          style={{ alignSelf: 'flex-start', marginTop: Spacings.XS }}
          onPress={() => navigation.navigate('LegalMentions')}
        >
          <Text style={{ color: Colors.white.default }}>
            Read legal mentions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignSelf: 'flex-start', marginTop: Spacings.XS }}
          onPress={() => navigation.navigate('PrivacyPolicy')}
        >
          <Text style={{ color: Colors.white.default }}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </LinearGradientBackground>
  );
};

export default NotAuthenticatedScreen;
