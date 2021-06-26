import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {StyleSheet, View, Dimensions} from 'react-native';
import {colors} from '../styles/colors';

interface Props {
  screenNumber: number;
}

export const Waves = ({screenNumber}: Props) => {
  if (screenNumber === 1) {
    return (
      <View style={styles.svg}>
        <Svg
          height="100"
          width="100%"
          style={styles.svg}
          viewBox="0 0 1440 320">
          <Path
            fill={colors.secondaryTint}
            fill-opacity="1"
            d="M0,256L80,224C160,192,320,128,480,117.3C640,107,800,149,960,154.7C1120,160,1280,128,1360,112L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </Svg>
        <Svg
          height="100"
          width="100%"
          style={styles.svg}
          viewBox="0 0 1440 320">
          <Path
            fill={colors.primary}
            d="M0,128L80,112C160,96,320,64,480,74.7C640,85,800,139,960,170.7C1120,203,1280,213,1360,218.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </Svg>
      </View>
    );
  }

  if (screenNumber === 2) {
    return (
      <View style={styles.svg}>
        <Svg
          height="100"
          width="100%"
          style={styles.svg}
          viewBox="0 0 1440 320">
          <Path
            fill={colors.secondaryTint}
            d="M0,32L80,69.3C160,107,320,181,480,213.3C640,245,800,235,960,213.3C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </Svg>
        <Svg
          height="100"
          width="100%"
          style={styles.svg}
          viewBox="0 0 1440 320">
          <Path
            d="M0,288L80,245.3C160,203,320,117,480,90.7C640,64,800,96,960,144C1120,192,1280,256,1360,288L1440,320L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            fill={colors.primary}
          />
        </Svg>
      </View>
    );
  }

  return (
    <View style={styles.svg}>
      <Svg height="100" width="100%" style={styles.svg} viewBox="0 0 1440 320">
        <Path
          fill={colors.secondaryTint}
          fill-opacity="1"
          d="M0,0L80,21.3C160,43,320,85,480,90.7C640,96,800,64,960,90.7C1120,117,1280,203,1360,245.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
      </Svg>
      <Svg height="100" width="100%" style={styles.svg} viewBox="0 0 1440 320">
        <Path
          fill={colors.primary}
          d="M0,288L80,277.3C160,267,320,245,480,202.7C640,160,800,96,960,80C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  svg: {
    top: -10,
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
});
