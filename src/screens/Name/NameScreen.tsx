import { MaterialIcons } from '@expo/vector-icons';
import React, { createRef, useState } from 'react';
import {
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
import { showAlert } from '../../utils/alert';
import {
  getArrayOfNumbersFromSplittedName,
  getTotal,
} from '../../utils/computation';

export default function NameScreen() {
  const validName = '^[a-zA-Z0-9\\s]+$';
  const inputDateRef = createRef<TextInput>();

  const [inputName, setInputName] = useState('');
  const [firstSubNumber, setFirstSubNumber] = useState<number | null>(null);
  const [chaldeanResult, setChaldeanResult] = useState<number | null>(null);
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const calculateName = () => {
    setFirstSubNumber(null);
    setChaldeanResult(null);
    const name = inputName.trim();
    if (name === '') {
      return;
    } else if (!name.match(validName)) {
      showAlert('Name can only contain letter and number');
      return;
    }
    Keyboard.dismiss();
    setIsButtonLoading(true);

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
              isLoading={isButtonLoading}
            />
            <View style={styles.resultContainer}>
              {firstSubNumber ? (
                <View style={styles.resultSection}>
                  <Text style={styles.resultLabel}>First Sub Number:</Text>
                  <>
                    <Text style={styles.resultText}>{firstSubNumber}</Text>
                  </>
                </View>
              ) : null}
              {chaldeanResult ? (
                <View style={styles.resultSection}>
                  <Text style={styles.resultLabel}>Chaldean:</Text>
                  <>
                    <Text style={styles.resultText}>{chaldeanResult}</Text>
                  </>
                </View>
              ) : null}
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </LinearGradientBackground>
  );
}
