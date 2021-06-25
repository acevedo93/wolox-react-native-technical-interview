import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export const Logo = () => {
  return (
    <View>
      <Image style={styles.logo} source={require('../assets/Logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});
