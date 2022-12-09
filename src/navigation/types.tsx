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
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Error: IError;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Date: undefined;
  Name: undefined;
  NumberList: undefined;
  Account: undefined;
};

export type NumberStackParamList = {
  List: undefined;
  Details: IChaldeanNumber;
};

export type AccountStackParamList = {
  ProfileNavigator: undefined;
  Login: undefined;
  SignUp: undefined;
  NotAuthenticatedNavigator: undefined;
};

export type NotAuthenticatedStackParamList = {
  NotAuthenticated: undefined;
  Login: undefined;
  SignUp: undefined;
  LegalInformation: undefined;
  PrivacyPolicy: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
  Favorites: undefined;
  PrivacyPolicy: undefined;
  LegalInformation: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type NumberStackScreenProps<Screen extends keyof NumberStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<NumberStackParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type AccountStackScreenProps<
  Screen extends keyof AccountStackParamList
> = CompositeScreenProps<
  BottomTabScreenProps<AccountStackParamList, Screen>,
  NativeStackScreenProps<AccountStackParamList>
>;

export type NotAuthenticatedStackScreenProps<
  Screen extends keyof NotAuthenticatedStackParamList
> = CompositeScreenProps<
  BottomTabScreenProps<NotAuthenticatedStackParamList, Screen>,
  NativeStackScreenProps<NotAuthenticatedStackParamList>
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
