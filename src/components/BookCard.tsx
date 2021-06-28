import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Animated,
} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';

import {FadeInImage} from './FadeInImage';
import {IBook} from '../interfaces/book';
import {colors} from '../styles/colors';
import {useNavigation} from '@react-navigation/native';

interface Props {
  book: IBook;
  animations: any;
}

export const BookCard = ({book, animations}: Props) => {
  const Navigator = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        Navigator.navigate('BookDetailScreen', {book});
      }}>
      <Animated.View
        style={{
          ...styles.container,
          transform: [{scale: animations.transform}],
          opacity: animations.opacity,
        }}>
        <View style={styles.descriptionContainer}>
          <FadeInImage uri={book.image_url} style={styles.imageStyle} />
          <View>
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.author}>{book.author}</Text>
            <Text style={styles.genre}>{book.genre}</Text>
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: colors.mediumShade,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  containerImg: {},
  descriptionContainer: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: colors.lightShade,
    marginBottom: 25,
    borderRadius: 10,
    marginHorizontal: 15,
    flex: 2,
  },
  title: {
    fontSize: 15,
    paddingLeft: 12,
    paddingTop: 10,
    opacity: 0.8,
    fontWeight: '700',
    color: colors.dark,
  },
  author: {
    fontSize: 10,
    paddingLeft: 12,
    paddingTop: 8,
    opacity: 0.8,
    color: colors.dark,
  },
  genre: {
    fontSize: 10,
    paddingLeft: 12,
    paddingTop: 10,
    color: colors.primary,
    fontWeight: '700',
    position: 'absolute',
    top: 70,
  },

  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
