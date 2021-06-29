import React from 'react';
import {Btn} from './Btn';
import {useLng} from '../hooks/useLng';
import {StyleSheet} from 'react-native';
import {Background} from './Background';
interface Props {
  background?: boolean;
  textColor?: string;
}
export const BtnTranslate = ({background = false, textColor}: Props) => {
  const {setLng} = useLng();
  return (
    <Btn
      label="en/es"
      onPress={setLng}
      background={background}
      textColor={textColor}
    />
  );
};
