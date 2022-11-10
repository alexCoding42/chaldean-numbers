import {Alert} from 'react-native';

export const showAlert = (errorMessage: string) => {
  Alert.alert('Error', errorMessage, [{text: 'OK'}]);
};
