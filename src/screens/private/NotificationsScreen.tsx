import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Waves} from '../../components/Waves';
import {MainContainer} from '../../components/MainContainer';
export const NotificationsScreen = () => {
  return (
    <MainContainer>
      <Waves screenNumber={3} />
      <Text>Notifications Screen</Text>
    </MainContainer>
  );
};
