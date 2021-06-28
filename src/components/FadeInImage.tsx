import React from 'react';
import {
  View,
  StyleProp,
  ImageStyle,
  Animated,
  NativeSyntheticEvent,
  ImageErrorEventData,
  ActivityIndicator,
} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';
import {useState} from 'react';

interface Props {
  uri: string | null;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style = {}}: Props) => {
  const {opacityAnimation, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);
  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  const onError = (err: NativeSyntheticEvent<ImageErrorEventData>) => {
    setIsLoading(false);
  };
  return (
    <View>
      {isLoading && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          color="grey"
          size={30}
        />
      )}
      <Animated.Image
        source={{uri}}
        style={{...(style as any), opacity: opacityAnimation}}
        onError={onError}
        onLoad={finishLoading}
      />
    </View>
  );
};