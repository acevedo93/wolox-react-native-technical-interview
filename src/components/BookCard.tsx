import React from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FadeInImage} from './FadeInImage';
import {IBook} from '../interfaces/book';
import {colors} from '../styles/colors';
import {useNavigation} from '@react-navigation/native';
import {globalStyles, BORDER_RADIUS, OPACITY} from '../styles/GlobalStyles';

interface Props {
  book: IBook;
  animations: any;
}

export const BookCard = ({book, animations}: Props) => {
  const Navigator = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={OPACITY}
      onPress={() => {
        Navigator.navigate('BookDetailScreen', {book});
      }}>
      <Animated.View
        style={{
          transform: [{scale: animations.transform}],
          opacity: animations.opacity,
        }}>
        <View style={[styles.cardContainer, globalStyles.verticalSpaces]}>
          <FadeInImage uri={book.image_url} style={styles.imageStyle} />
          <View
            style={[styles.descriptionContainer, globalStyles.verticalSpaces]}>
            <Text style={globalStyles.cardTitle}>{book.title}</Text>
            <Text style={globalStyles.subtitle}>{book.author}</Text>
            <Text style={globalStyles.chip}>{book.genre}</Text>
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: colors.lightShade,
    borderRadius: BORDER_RADIUS,
    marginHorizontal: 15,
  },
  descriptionContainer: {
    flex: 1,
    marginLeft: 10,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: BORDER_RADIUS,
  },
});
