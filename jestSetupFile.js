import React from 'react';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import 'react-native-gesture-handler/jestSetup';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('react-native-snackbar', () => {});
jest.mock('react-i18next', () => ({
  useTranslation: param => {
    const t = str => str;
    const i18n = {
      changeLanguage: () => new Promise(() => {}),
    };
    return [t, i18n];
  },
}));

jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableOpacity.js',
  () => {
    const {TouchableHighlight} = require('react-native');
    const MockTouchable = props => {
      return <TouchableHighlight {...props} />;
    };
    MockTouchable.displayName = 'TouchableOpacity';

    return MockTouchable;
  },
);
