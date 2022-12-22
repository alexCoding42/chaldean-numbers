import { MaterialIcons } from '@expo/vector-icons';
import React, { createRef, useCallback, useState } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DatePicker from 'react-native-date-picker';
import { format } from 'date-fns';
import {
  LinearGradientBackground,
  LinearGradientButton,
} from '../../components/atoms';
import { Colors } from '../../theme/colors';
import styles from './styles';
import { CHALDEAN_NUMBERS } from '../../constants/ChaldeanNumbers';
import { getTotal } from '../../utils/computation';
import { useAuthenticationStatus, useUserData } from '@nhost/react';
import { useLazyQuery, useMutation } from '@apollo/client';
import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  GET_FAVORITES,
} from '../../graphql/queries';
import { IFavorite } from '../../types';

export default function DateScreen() {
  const { isAuthenticated } = useAuthenticationStatus();
  const user = useUserData();

  const inputDateRef = createRef<TextInput>();

  const [date, setDate] = useState(new Date());
  const [inputDate, setInputDate] = useState('');
  const [firstSubNumber, setFirstSubNumber] = useState<number | null>(null);
  const [chaldeanResult, setChaldeanResult] = useState<number | null>(null);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isDateFavorite, setIsDateFavorite] = useState<boolean | undefined>(
    false
  );
  const [dateFavoriteId, setDateFavoriteId] = useState('');

  const [getFavorites, { loading: isfetchingFavorites }] = useLazyQuery(
    GET_FAVORITES,
    {
      fetchPolicy: 'network-only',
    }
  );

  const [insertFavorite] = useMutation(ADD_FAVORITE);

  const [removeFavorite] = useMutation(DELETE_FAVORITE);

  const calculateDate = async () => {
    setFirstSubNumber(null);
    setChaldeanResult(null);
    if (inputDate === '') {
      return;
    }
    Keyboard.dismiss();
    setIsButtonLoading(true);

    const favoriteData = await checkIfDateIsFavorite();
    setIsDateFavorite(favoriteData?.isDateFavorite);
    setDateFavoriteId(favoriteData?.dateFavoriteId);

    setTimeout(() => {
      const formattedDate = format(new Date(date), 'yyyyMMdd');
      const firstSubNum = getTotal(formattedDate);

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
    setInputDate('');
    setFirstSubNumber(null);
    setChaldeanResult(null);
  };

  const handleDatePicker = (d: Date) => {
    setIsDatePickerOpen(false);
    setDate(d);
    setInputDate(format(d, 'yyyy-MM-dd'));
  };

  const handleFavorite = async () => {
    if (isDateFavorite) {
      deleteFavorite();
    } else {
      addFavorite();
    }
  };

  const addFavorite = async () => {
    try {
      const res = await insertFavorite({
        variables: {
          type: 'date',
          value: inputDate,
          userId: user?.id,
        },
      });
      setIsDateFavorite(true);
      setDateFavoriteId(res.data.insert_favorites.returning[0].id);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteFavorite = async () => {
    try {
      await removeFavorite({
        variables: {
          id: dateFavoriteId,
        },
      });
      setIsDateFavorite(false);
      setDateFavoriteId('');
    } catch (error) {
      console.error(error);
    }
  };

  const checkIfDateIsFavorite = async () => {
    try {
      const date = inputDate;
      const { data } = await getFavorites();

      if (isfetchingFavorites) {
        return { isDateFavorite: false, dateFavoriteId: '' };
      } else if (data) {
        const favorite = data.favorites.find(
          (fav: IFavorite) => fav.value === date
        );
        return {
          isDateFavorite: favorite?.id != null,
          dateFavoriteId: favorite?.id ?? '',
        };
      }
    } catch (error) {
      console.error(error);
      return { isDateFavorite: false, dateFavoriteId: '' };
    }
  };

  const renderFavoriteIcon = useCallback(() => {
    return (
      <MaterialIcons
        name={isDateFavorite ? 'favorite' : 'favorite-outline'}
        size={18}
        color={Colors.red.default}
      />
    );
  }, [isDateFavorite]);

  return (
    <LinearGradientBackground>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.safeAreaViewContainer}>
          <View style={styles.container}>
            <Text style={styles.title}>Find the chaldean number of a date</Text>
            <Text style={styles.textInputTitle}>Full Date</Text>
            <TouchableOpacity
              style={styles.textInputContainer}
              onPressIn={() => setIsDatePickerOpen(true)}
            >
              <TextInput
                ref={inputDateRef}
                keyboardType='number-pad'
                placeholder='Ex: 2022-12-31'
                placeholderTextColor={Colors.grey.tabIconUnselected}
                style={styles.input}
                editable={false}
                onPressIn={() => setIsDatePickerOpen(true)}
                value={inputDate}
              />
              <TouchableOpacity style={styles.clearIcon} onPress={clearField}>
                <MaterialIcons
                  color={Colors.white.default}
                  name='clear'
                  size={20}
                />
              </TouchableOpacity>
            </TouchableOpacity>
            <DatePicker
              modal
              mode='date'
              open={isDatePickerOpen}
              date={date}
              onConfirm={(d) => handleDatePicker(d)}
              onCancel={() => {
                setIsDatePickerOpen(false);
              }}
            />
            <LinearGradientButton
              buttonText='Calculate'
              onPress={calculateDate}
              isLoading={isButtonLoading}
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
