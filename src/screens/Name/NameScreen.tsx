import { MaterialIcons } from '@expo/vector-icons';
import React, { createRef, useCallback, useState } from 'react';
import {
  Alert,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import {
  LinearGradientBackground,
  LinearGradientButton,
} from '../../components/atoms';
import { CHALDEAN_NUMBERS } from '../../constants/ChaldeanNumbers';
import { Colors } from '../../theme/colors';
import {
  getArrayOfNumbersFromSplittedName,
  getTotal,
} from '../../utils/computation';
import { useAuthenticationStatus, useUserData } from '@nhost/react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { IFavorite } from '../../types';
import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  GET_FAVORITES,
} from '../../graphql/queries';

export default function NameScreen() {
  const { isAuthenticated } = useAuthenticationStatus();
  const user = useUserData();

  const validName = '^[a-zA-Z0-9\\s]+$';
  const inputDateRef = createRef<TextInput>();

  const [inputName, setInputName] = useState('');
  const [firstSubNumber, setFirstSubNumber] = useState<number | null>(null);
  const [chaldeanResult, setChaldeanResult] = useState<number | null>(null);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [isNameFavorite, setIsNameFavorite] = useState<boolean | undefined>(
    false
  );
  const [nameFavoriteId, setNameFavoriteId] = useState('');

  const [getFavorites, { loading: isfetchingFavorites }] = useLazyQuery(
    GET_FAVORITES,
    {
      fetchPolicy: 'network-only',
    }
  );

  const [insertFavorite] = useMutation(ADD_FAVORITE);

  const [removeFavorite] = useMutation(DELETE_FAVORITE);

  const calculateName = async () => {
    setFirstSubNumber(null);
    setChaldeanResult(null);
    const name = inputName.trim();
    if (name === '') {
      return;
    } else if (!name.match(validName)) {
      Alert.alert('Warning', 'Name can only contain letter and number');
      return;
    }
    Keyboard.dismiss();
    setIsButtonLoading(true);

    const favoriteData = await checkIfNameIsFavorite();
    setIsNameFavorite(favoriteData?.isNameFavorite);
    setNameFavoriteId(favoriteData?.nameFavoriteId);

    setTimeout(() => {
      const arrayOfNumbersFromName = splitNameAndReturnArrayOfNumbers(name);
      const firstSubNum = getTotalOfArrayNumbers(arrayOfNumbersFromName);

      if (CHALDEAN_NUMBERS.includes(firstSubNum)) {
        setChaldeanResult(firstSubNum);
      } else {
        let total = firstSubNum;
        while (!CHALDEAN_NUMBERS.includes(total)) {
          total = getTotal(total);
        }
        setFirstSubNumber(firstSubNum);
        setChaldeanResult(total);
      }

      setIsButtonLoading(false);
    }, 1000);
  };

  const clearField = () => {
    inputDateRef?.current?.clear();
    setInputName('');
    setFirstSubNumber(null);
    setChaldeanResult(null);
  };

  const getTotalOfArrayNumbers = (numbers: number[]) => {
    return numbers
      .map(Number)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  };

  const splitNameAndReturnArrayOfNumbers = (name: string) => {
    const splittedName = name
      .toLowerCase()
      .trim()
      .split('')
      .map((item) => item.trim())
      .filter((element) => element !== '');
    return getArrayOfNumbersFromSplittedName(splittedName);
  };

  const handleFavorite = async () => {
    if (isNameFavorite) {
      deleteFavorite();
    } else {
      addFavorite();
    }
  };

  const addFavorite = async () => {
    try {
      const res = await insertFavorite({
        variables: {
          type: 'name',
          value: inputName.trim().toLowerCase(),
          userId: user?.id,
        },
      });
      setIsNameFavorite(true);
      setNameFavoriteId(res.data.insert_favorites.returning[0].id);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteFavorite = async () => {
    try {
      await removeFavorite({
        variables: {
          id: nameFavoriteId,
        },
      });
      setIsNameFavorite(false);
      setNameFavoriteId('');
    } catch (error) {
      console.error(error);
    }
  };

  const checkIfNameIsFavorite = async () => {
    try {
      const name = inputName.trim().toLowerCase();
      const { data } = await getFavorites();

      if (isfetchingFavorites) {
        return { isNameFavorite: false, nameFavoriteId: '' };
      } else if (data) {
        const favorite = data.favorites.find(
          (fav: IFavorite) => fav.value === name
        );
        return {
          isNameFavorite: favorite?.id != null,
          nameFavoriteId: favorite?.id ?? '',
        };
      }
    } catch (error) {
      console.error(error);
      return { isNameFavorite: false, nameFavoriteId: '' };
    }
  };

  const renderFavoriteIcon = useCallback(() => {
    return (
      <MaterialIcons
        name={isNameFavorite ? 'favorite' : 'favorite-outline'}
        size={18}
        color={Colors.red.default}
      />
    );
  }, [isNameFavorite]);

  return (
    <LinearGradientBackground>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.safeAreaViewContainer}>
          <View style={styles.container}>
            <Text style={styles.title}>Find the chaldean number of a name</Text>
            <Text style={styles.textInputTitle}>Full Name</Text>
            <View style={styles.textInputContainer}>
              <TextInput
                testID='nameTextInput'
                ref={inputDateRef}
                placeholder='Ex: Google LLC'
                placeholderTextColor={Colors.grey.tabIconUnselected}
                autoCapitalize='none'
                style={styles.input}
                value={inputName}
                onChangeText={(value) => setInputName(value)}
              />
              <TouchableOpacity style={styles.clearIcon} onPress={clearField}>
                <MaterialIcons
                  color={Colors.white.default}
                  name='clear'
                  size={20}
                />
              </TouchableOpacity>
            </View>
            <LinearGradientButton
              buttonText='Calculate'
              onPress={calculateName}
              isLoading={isButtonLoading || isfetchingFavorites}
            />

            <View style={styles.resultContainer}>
              {firstSubNumber ? (
                <View style={styles.resultSection}>
                  <Text style={styles.resultLabel}>First Sub Number:</Text>
                  <Text style={styles.resultText}>{firstSubNumber}</Text>
                </View>
              ) : null}
              {chaldeanResult ? (
                <View style={styles.resultSection}>
                  <Text style={styles.resultLabel}>Chaldean:</Text>
                  <Text style={styles.resultText}>{chaldeanResult}</Text>
                  {isAuthenticated && (
                    <TouchableOpacity onPress={handleFavorite}>
                      {renderFavoriteIcon()}
                    </TouchableOpacity>
                  )}
                </View>
              ) : null}
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </LinearGradientBackground>
  );
}
