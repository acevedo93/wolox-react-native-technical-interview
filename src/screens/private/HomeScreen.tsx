import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {AuthContext} from '../../context/auth/AuthContext';
export const HomeScreen = () => {
  const {logOut} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      <Button title="logout" color="#55334" onPress={logOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
