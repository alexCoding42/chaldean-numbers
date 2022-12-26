import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootNavigatorStackParamList } from './types';

const linking: LinkingOptions<RootNavigatorStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Home: {
        screens: {
          Date: {
            screens: {
              DateScreen: 'date',
            },
          },
          Name: {
            screens: {
              NameScreen: 'name',
            },
          },
          NumberList: {
            screens: {
              NumberListScreen: 'number-list',
              NumberDetailsScreen: 'details',
            },
          },
          'My profile': {
            screens: {
              LoginScreen: 'login',
              SignUpScreen: 'sign-up',
              ProfileScreen: 'profile',
              FavoriteScreen: 'favorite',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
      Error: 'error',
    },
  },
};

export default linking;
