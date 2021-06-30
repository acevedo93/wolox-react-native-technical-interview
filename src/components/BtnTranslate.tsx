import React from 'react';
import {Btn} from './Btn';
import {useLng} from '../hooks/useLng';
import {View} from 'react-native';

interface Props {
  background?: boolean;
  textColor?: string;
}
export const BtnTranslate = ({background = false, textColor}: Props) => {
  const {setLng} = useLng();

  return (
    <View testID="btn-translate">
      <Btn
        label="en/es"
        onPress={setLng}
        background={background}
        textColor={textColor}
      />
    </View>
  );
};
