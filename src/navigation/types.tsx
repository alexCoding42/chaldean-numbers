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

export type NumberDetailsNavigationProp = NativeStackNavigationProp<
  NumberStackParamList,
  'Details'
>;
