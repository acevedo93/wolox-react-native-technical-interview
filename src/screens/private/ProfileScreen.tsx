import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {Waves} from '../../components/Waves';
import {BtnTranslate} from '../../components/BtnTranslate';
import {Btn} from '../../components/Btn';
import {AuthContext} from '../../context/auth/AuthContext';
import {useLng} from '../../hooks/useLng';
import {MainContainer} from '../../components/MainContainer';
import {globalStyles} from '../../styles/GlobalStyles';
import {colors} from '../../styles/colors';
import {Background} from '../../components/Background';

export const ProfileScreen = () => {
  const {logOut} = useContext(AuthContext);
  const {t} = useLng();

  return (
    <MainContainer>
      <Waves />
      <Text testID="profile-title" style={globalStyles.title}>
        {t('profileScreen.headerTitle.label')}
      </Text>
      <View style={globalStyles.verticalSpaces}>
        <BtnTranslate />
        <Btn
          onPress={logOut}
          label={t('btnLogout.label')}
          gradient={true}
          style={{color: colors.primary, borderColor: colors.primary}}
          background={true}
        />
      </View>
    </MainContainer>
  );
};
