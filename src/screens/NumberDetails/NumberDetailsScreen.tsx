import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { LinearGradientBackground } from '../../components/atoms';
import styles from './styles';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { NumberStackScreenProps } from '../../navigation/types';

export default function NumberDetailsScreen({
  route,
}: NumberStackScreenProps<'Details'>) {
  const tabBarHeight = useBottomTabBarHeight();
  const {
    name,
    chaldean,
    description,
    words,
    lifepath,
    challenge,
    phrase_title,
    phrase_description,
  } = route.params;

  return (
    <LinearGradientBackground>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator
          indicatorStyle='white'
          contentContainerStyle={[
            styles.scrollViewContainer,
            {
              paddingBottom: tabBarHeight,
            },
          ]}
        >
          <View style={styles.titleContainer}>
            {chaldean ? <Text style={styles.title}>{chaldean}</Text> : null}
            {name ? <Text style={styles.title}>{name}</Text> : null}
          </View>
          {description ? (
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Traditional Descriptives</Text>
              <Text style={styles.sectionContent}>{description}</Text>
            </View>
          ) : null}
          {words ? (
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                Words that Total to Number {chaldean ?? ''}
              </Text>
              <Text style={styles.sectionContent}>{words}</Text>
            </View>
          ) : null}
          {lifepath ? (
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                Lifepath for the Number {chaldean ?? ''}
              </Text>
              <Text style={styles.sectionContent}>{lifepath}</Text>
            </View>
          ) : null}
          {challenge ? (
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                Challenge for the Number {chaldean ?? ''}
              </Text>
              <Text style={styles.sectionContent}>{challenge}</Text>
            </View>
          ) : null}
          {phrase_title && phrase_description ? (
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                Quirky Phrase to Remember the {chaldean ?? ''} By
              </Text>
              <Text style={styles.sectionPhraseTitle}>{phrase_title}</Text>
              <Text style={styles.sectionContent}>{phrase_description}</Text>
            </View>
          ) : null}
        </ScrollView>
      </View>
    </LinearGradientBackground>
  );
}
