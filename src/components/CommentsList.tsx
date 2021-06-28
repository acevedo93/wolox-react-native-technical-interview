import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import {IComment} from '../interfaces/book';
import {BookCard} from './BookCard';
import {useRef} from 'react';
import {Comment} from './Comment';
import {colors} from '../styles/colors';

interface Props {
  comments: IComment[] | undefined;
}
const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;
export const CommentsList = ({comments}: Props) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <Animated.FlatList
      onScroll={Animated.event(
        [
          {
            nativeEvent: {contentOffset: {y: scrollY}},
          },
        ],
        {useNativeDriver: true},
      )}
      data={comments}
      keyExtractor={comment => comment.id.toString()}
      renderItem={({item, index}) => {
        const inputRange = [
          -1,
          0,
          ITEM_SIZE * index + 5,
          ITEM_SIZE * (index + 5),
        ];
        const opacityInputRange = [
          -1,
          0,
          ITEM_SIZE * index,
          ITEM_SIZE * (index + 0.6),
        ];
        const transform = scrollY.interpolate({
          inputRange,
          outputRange: [1, 1, 1, 0],
        });
        const opacity = scrollY.interpolate({
          inputRange: opacityInputRange,
          outputRange: [1, 1, 1, 0],
        });
        const objectWithAnimations = {
          transform,
          opacity,
        };
        return (
          <Animated.View
            style={{
              ...styles.container,
              transform: [{scale: objectWithAnimations.transform}],
              opacity: objectWithAnimations.opacity,
            }}>
            <Comment comment={item} />
          </Animated.View>
        );
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightShade,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: colors.mediumShade,

    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.23,
    shadowRadius: 1,

    elevation: 4,
  },
});
