import React from 'react';
import {Animated} from 'react-native';
import {IBook} from '../interfaces/book';
import {BookCard} from './BookCard';
import {useRef} from 'react';

interface Props {
  books: IBook[] | undefined;
}

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

export const BookList = ({books}: Props) => {
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
      data={books}
      refreshing={true}
      keyExtractor={book => book.id.toString()}
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
        return <BookCard book={item} animations={objectWithAnimations} />;
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};
