import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {AuthContext} from '../../context/auth/AuthContext';
import {Waves} from '../../components/Waves';
export const HomeScreen = () => {
  const {logOut} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Waves screenNumber={1} />
      <Text>Home Screen</Text>

      <Button title="logout" onPress={logOut} />
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
