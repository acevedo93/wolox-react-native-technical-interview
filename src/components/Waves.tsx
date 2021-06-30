import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {StyleSheet, View, Dimensions} from 'react-native';
import {colors} from '../styles/colors';

export const Waves = () => {
  return (
    <View style={styles.svg} testID="waves">
      <Svg height="100" width="100%" style={styles.svg} viewBox="0 0 1440 320">
        <Path
          fill={colors.secondaryTint}
          fill-opacity="1"
          d="M0,64L48,96C96,128,192,192,288,208C384,224,480,192,576,181.3C672,171,768,181,864,192C960,203,1056,213,1152,181.3C1248,149,1344,75,1392,37.3L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </Svg>
      <Svg height="100" width="100%" style={styles.svg} viewBox="0 0 1440 320">
        <Path
          fill={colors.tertiary}
          d="M0,224L80,197.3C160,171,320,117,480,122.7C640,128,800,192,960,218.7C1120,245,1280,235,1360,229.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  svg: {
    zIndex: 2,
    top: -10,
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
});
