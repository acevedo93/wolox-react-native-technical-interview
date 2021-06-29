import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {Background} from '../../components/Background';
import {useEffect} from 'react';
import {useLng} from '../../hooks/useLng';
import {colors} from '../../styles/colors';

export const LoadingScreen = () => {
  const {checkLng} = useLng();
  useEffect(() => {
    checkLng();
  }, []);

  return (
    <Background>
      <View style={styles.loader}>
        <ActivityIndicator size={50} color={colors.secondary} />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
