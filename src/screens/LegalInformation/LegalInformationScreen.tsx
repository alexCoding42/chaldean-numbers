import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { LinearGradientBackground } from '../../components/atoms';
import styles from './styles';

export default function LegalInformationScreen() {
  return (
    <LinearGradientBackground>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator
          indicatorStyle='white'
          contentContainerStyle={styles.scrollViewContainer}
        >
          <Text style={styles.text}>
            The application is property of the company Next App Conception LLC.
          </Text>
          <Text style={styles.text}>
            Address: Next App Conception LLC, 30 N Gould St. Ste R Sheridan,
            Wyoming 82801 USA
          </Text>
          <Text style={styles.text}>ID number: 2021-001018849</Text>
          <Text style={styles.text}>
            Email address: next.app.conception@gmail.com
          </Text>
          <Text style={styles.text}>
            Owner: The Director of the company is Mr Alexandre Cissé
          </Text>
        </ScrollView>
      </View>
    </LinearGradientBackground>
  );
}
