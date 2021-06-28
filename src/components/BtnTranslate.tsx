import React from 'react';
import {Btn} from './Btn';
import {useLng} from '../hooks/useLng';
import {StyleSheet} from 'react-native';
import {Background} from './Background';
interface Props {
  background?: boolean;
}
export const BtnTranslate = ({background = false}: Props) => {
  const {setLng} = useLng();
  return <Btn label="en/es" onPress={setLng} background={background} />;
};
