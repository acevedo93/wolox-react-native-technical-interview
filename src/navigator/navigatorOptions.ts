import {FONT_FAMILY} from '../styles/GlobalStyles';
import {colors} from '../styles/colors';
import {Platform} from 'react-native';

export const screenOptions = {
  headerStyle: {
    elevation: 0,
    shadowColor: 'transparent',
    backgroundColor: colors.tertiary,
  },
  headerBackTitle: ' ',
  headerTintColor: colors.lightTint,
  headerTitleStyle: {
    fontFamily: FONT_FAMILY,
  },
  headerTitleAlign: 'center',
  cardStyle: {
    backgroundColor: 'white',
  },
};
export const tabBarOptions = {
  activeTintColor: colors.primaryTint,
  labelStyle: {
    marginBottom: Platform.OS === 'ios' ? 0 : 10,
    fontFamily: FONT_FAMILY,
  },

  style: {
    borderWidth: 0,
    elevation: 0,
    height: Platform.OS === 'ios' ? 80 : 60,
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.92)',
  },
};
