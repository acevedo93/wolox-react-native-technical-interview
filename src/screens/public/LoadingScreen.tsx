import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {Background} from '../../components/Background';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import {useLng} from '../../hooks/useLng';
import {colors} from '../../styles/colors';

export const LoadingScreen = () => {
  const {checkLng} = useLng();
  useEffect(() => {
    checkLng();
  }, []);
  return (
    <View style={styles.loadingContainer}>
      <Background />
      <ActivityIndicator size={50} color={colors.light} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
