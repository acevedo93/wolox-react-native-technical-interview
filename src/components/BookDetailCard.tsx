import React from 'react';
import {IBook} from '../interfaces/book';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../styles/colors';
import {FadeInImage} from './FadeInImage';
import {Btn} from './Btn';
import {Background} from './Background';
import {useLng} from '../hooks/useLng';

interface Props {
  book: IBook;
}
export const BookDetailCard = ({book}: Props) => {
  const {t} = useLng();
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.topContainer}>
          <FadeInImage uri={book.image_url} style={styles.imageStyle} />
          <View style={styles.descriptionContainer}>
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.genre}>{book.genre}</Text>
            <Text style={styles.author}>{book.author}</Text>
            <Text style={styles.year}>{book.year}</Text>
            <Text style={styles.publisher}>{book.publisher}</Text>
          </View>
        </View>
        <View style={styles.btnsContainer}>
          <Btn
            label={t('bookCardDetail.btns.addToWishList.label')}
            onPress={() => {}}
            style={{color: colors.primary, borderColor: colors.primary}}
          />
          <Btn
            label={t('bookCardDetail.btns.rent.label')}
            onPress={() => {}}
            style={{color: colors.primary, borderColor: colors.primary}}
            background={true}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightShade,
    marginBottom: 10,
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 13,
  },
  topContainer: {
    flexDirection: 'row',
  },
  imageStyle: {
    width: 120,
    height: 120,
    borderRadius: 20,
  },
  descriptionContainer: {
    marginLeft: 12,
    flex: 1,
  },
  title: {
    fontSize: 20,
    paddingTop: 5,
    opacity: 0.8,
    fontWeight: '700',
    color: colors.dark,
  },
  author: {
    fontSize: 18,
    paddingTop: 5,
    opacity: 0.8,
    color: colors.dark,
  },
  genre: {
    fontSize: 12,
    paddingTop: 5,
    color: colors.primary,
    fontWeight: '700',
  },

  year: {},
  publisher: {},
  btnsContainer: {
    marginTop: 12,
    marginHorizontal: 20,
  },
});
