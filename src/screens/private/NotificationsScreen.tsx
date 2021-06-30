import React from 'react';
import {Text} from 'react-native';

import {Waves} from '../../components/Waves';
import {MainContainer} from '../../components/MainContainer';
import {globalStyles} from '../../styles/GlobalStyles';
import {useLng} from '../../hooks/useLng';
export const NotificationsScreen = () => {
  const {t} = useLng();
  return (
    <MainContainer>
      <Waves />
      <Text testID="notification-title" style={globalStyles.title}>
        {t('notificationsScreen.headerTitle.label')}
      </Text>
    </MainContainer>
  );
};
