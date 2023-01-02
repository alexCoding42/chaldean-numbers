import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { IChaldeanNumber, IError } from '../types';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootNavigatorStackParamList {}
  }
}

export type RootNavigatorStackParamList = {
  Home: NavigatorScreenParams<BottomTabNavigatorParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Error: IError;
  Auth: undefined;
};

export type RootStackScreenProps<
  Screen extends keyof RootNavigatorStackParamList
> = NativeStackScreenProps<RootNavigatorStackParamList, Screen>;

export type AuthStackNavigatorParamList = {
  'Not authenticated': undefined;
  'Sign in': undefined;
  'Sign up': undefined;
  'Legal information': undefined;
  'Privacy policy': undefined;
  'Forgot password': undefined;
};

export type SignInNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Sign in'
>;

export type SignUpNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Sign up'
>;

export type NotAuthenticatedNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Not authenticated'
>;

export type ForgotPasswordNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Forgot password'
>;

export type BottomTabNavigatorParamList = {
  Date: undefined;
  Name: undefined;
  NumberList: undefined;
  'My profile': undefined;
};

export type NumberStackParamList = {
  List: undefined;
  Details: IChaldeanNumber;
};

export type ProfileNavigatorParamList = {
  MyProfile: NavigatorScreenParams<ProfileStackParamList>;
  AuthStack: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
  Favorites: undefined;
  'Legal information': undefined;
  'Privacy policy': undefined;
  Account: undefined;
};

export type RootTabScreenProps<
  Screen extends keyof RootNavigatorStackParamList
> = CompositeScreenProps<
  BottomTabScreenProps<RootNavigatorStackParamList, Screen>,
  NativeStackScreenProps<RootNavigatorStackParamList>
>;

export type NumberStackScreenProps<Screen extends keyof NumberStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<NumberStackParamList, Screen>,
    NativeStackScreenProps<RootNavigatorStackParamList>
  >;

export type ProfileStackScreenProps<
  Screen extends keyof ProfileStackParamList
> = CompositeScreenProps<
  BottomTabScreenProps<ProfileStackParamList, Screen>,
  NativeStackScreenProps<ProfileStackParamList>
>;

export type NumberDetailsNavigationProp = NativeStackNavigationProp<
  NumberStackParamList,
  'Details'
>;
