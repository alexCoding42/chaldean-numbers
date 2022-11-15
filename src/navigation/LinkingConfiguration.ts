import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from './types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
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
          Account: {
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
