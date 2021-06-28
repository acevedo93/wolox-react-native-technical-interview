import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Waves} from '../../components/Waves';
import {MainContainer} from '../../components/MainContainer';
import {globalStyles} from '../../styles/GlobalStyles';
export const NotificationsScreen = () => {
  return (
    <MainContainer>
      <Waves />
      <Text style={globalStyles.title}>Notifications</Text>
    </MainContainer>
  );
};
