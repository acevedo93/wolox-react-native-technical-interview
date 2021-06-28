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
          d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,90.7C672,64,768,96,864,101.3C960,107,1056,85,1152,106.7C1248,128,1344,192,1392,224L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </Svg>
      <Svg height="100" width="100%" style={styles.svg} viewBox="0 0 1440 320">
        <Path
          fill={colors.primary}
          d="M0,32L48,69.3C96,107,192,181,288,218.7C384,256,480,256,576,213.3C672,171,768,85,864,74.7C960,64,1056,128,1152,133.3C1248,139,1344,85,1392,58.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
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
