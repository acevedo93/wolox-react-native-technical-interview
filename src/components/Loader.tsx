import React from 'react';
import {ActivityIndicator, View, StyleSheet, Text} from 'react-native';
import {colors} from '../styles/colors';
import {IError} from '../interfaces/error';
import {ErrorImg} from './ErrorImg';
import {FONT_FAMILY} from '../styles/GlobalStyles';

interface Props {
  children: JSX.Element | JSX.Element[];
  loading: boolean;
  error: IError | undefined;
}
export const LoaderData = ({children, loading, error}: Props) => {
  const renderError = () => (
    <View style={styles.errorMsgContainer}>
      <ErrorImg />
      <Text style={styles.errorMsg}>{error?.msg}</Text>
    </View>
  );
  const renderLoader = () => (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
  return (
    <View>
      {loading && renderLoader()}
      {!loading && error?.status && renderError()}
      {!loading && !error?.status && children}
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {},
  errorMsgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMsg: {
    fontFamily: FONT_FAMILY,
    fontSize: 20,
    paddingHorizontal: 50,
    color: colors.primary,
  },
});
